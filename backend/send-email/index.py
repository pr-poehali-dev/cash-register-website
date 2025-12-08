import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
from pydantic import BaseModel, Field, EmailStr

class EmailRequest(BaseModel):
    '''Модель данных для заявки с сайта'''
    name: str = Field(..., min_length=1)
    phone: str = Field(..., min_length=1)
    email: EmailStr
    message: str = Field(default='')

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Отправляет заявки с сайта на email Master-kass@list.ru
    Принимает: имя, телефон, email, сообщение
    Возвращает: статус отправки
    '''
    method: str = event.get('httpMethod', 'GET')
    
    # CORS preflight
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    # Парсим данные заявки
    body_data = json.loads(event.get('body', '{}'))
    email_req = EmailRequest(**body_data)
    
    # Настройки SMTP
    smtp_host = os.environ['SMTP_HOST']
    smtp_port = int(os.environ['SMTP_PORT'])
    smtp_user = os.environ['SMTP_USER']
    smtp_password = os.environ['SMTP_PASSWORD']
    
    # Формируем письмо
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта от {email_req.name}'
    msg['From'] = smtp_user
    msg['To'] = smtp_user
    
    # HTML версия письма
    html_body = f'''
    <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #2563eb;">Новая заявка с сайта Мастер-Касс</h2>
            <table style="width: 100%; max-width: 600px; border-collapse: collapse;">
                <tr>
                    <td style="padding: 10px; background: #f3f4f6; font-weight: bold; width: 150px;">Имя:</td>
                    <td style="padding: 10px; background: #fff;">{email_req.name}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; background: #f3f4f6; font-weight: bold;">Телефон:</td>
                    <td style="padding: 10px; background: #fff;"><a href="tel:{email_req.phone}">{email_req.phone}</a></td>
                </tr>
                <tr>
                    <td style="padding: 10px; background: #f3f4f6; font-weight: bold;">Email:</td>
                    <td style="padding: 10px; background: #fff;"><a href="mailto:{email_req.email}">{email_req.email}</a></td>
                </tr>
                <tr>
                    <td style="padding: 10px; background: #f3f4f6; font-weight: bold; vertical-align: top;">Сообщение:</td>
                    <td style="padding: 10px; background: #fff;">{email_req.message if email_req.message else 'Не указано'}</td>
                </tr>
            </table>
            <p style="margin-top: 20px; color: #6b7280; font-size: 14px;">
                Отправлено: {context.request_id}
            </p>
        </body>
    </html>
    '''
    
    msg.attach(MIMEText(html_body, 'html', 'utf-8'))
    
    # Отправляем письмо
    with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
        server.login(smtp_user, smtp_password)
        server.send_message(msg)
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'success': True,
            'message': 'Заявка успешно отправлена'
        }),
        'isBase64Encoded': False
    }

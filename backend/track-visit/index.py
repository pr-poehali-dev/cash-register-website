import json
import os
import psycopg2
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Отслеживает посещения сайта и увеличивает счётчик
    Возвращает: общее количество посещений
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
    
    # Подключение к базе данных
    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cursor = conn.cursor()
    
    try:
        # Увеличиваем счётчик для сегодняшнего дня
        cursor.execute('''
            INSERT INTO t_p80097560_cash_register_websit.visitors (visit_date, visit_count)
            VALUES (CURRENT_DATE, 1)
            ON CONFLICT (visit_date) 
            DO UPDATE SET visit_count = t_p80097560_cash_register_websit.visitors.visit_count + 1
            RETURNING visit_count
        ''')
        
        today_count = cursor.fetchone()[0]
        
        # Получаем общее количество посещений
        cursor.execute('''
            SELECT COALESCE(SUM(visit_count), 0) as total
            FROM t_p80097560_cash_register_websit.visitors
        ''')
        
        total_count = cursor.fetchone()[0]
        
        conn.commit()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'today': int(today_count),
                'total': int(total_count)
            }),
            'isBase64Encoded': False
        }
    
    except Exception as e:
        conn.rollback()
        raise e
    
    finally:
        cursor.close()
        conn.close()

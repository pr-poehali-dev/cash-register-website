import json
import os
import psycopg2
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Получает статистику посещений сайта
    Возвращает: посещений сегодня и всего
    '''
    method: str = event.get('httpMethod', 'GET')
    
    # CORS preflight
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'GET':
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
        # Получаем посещения за сегодня
        cursor.execute('''
            SELECT COALESCE(visit_count, 0) 
            FROM t_p80097560_cash_register_websit.visitors
            WHERE visit_date = CURRENT_DATE
        ''')
        
        result = cursor.fetchone()
        today_count = result[0] if result else 0
        
        # Получаем общее количество посещений
        cursor.execute('''
            SELECT COALESCE(SUM(visit_count), 0) as total
            FROM t_p80097560_cash_register_websit.visitors
        ''')
        
        total_count = cursor.fetchone()[0]
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'today': int(today_count),
                'total': int(total_count)
            }),
            'isBase64Encoded': False
        }
    
    finally:
        cursor.close()
        conn.close()

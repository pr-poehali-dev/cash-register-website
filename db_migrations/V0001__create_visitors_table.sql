CREATE TABLE t_p80097560_cash_register_websit.visitors (
    id SERIAL PRIMARY KEY,
    visit_date DATE NOT NULL DEFAULT CURRENT_DATE,
    visit_count INTEGER NOT NULL DEFAULT 0,
    UNIQUE(visit_date)
);

CREATE INDEX idx_visitors_date ON t_p80097560_cash_register_websit.visitors(visit_date);

INSERT INTO t_p80097560_cash_register_websit.visitors (visit_date, visit_count) 
VALUES (CURRENT_DATE, 0)
ON CONFLICT (visit_date) DO NOTHING;

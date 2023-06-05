DELETE FROM quizes
WHERE id = $1;
DELETE FROM questions WHERE quiz_id = $1;
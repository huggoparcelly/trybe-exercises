SELECT COUNT(JOB_ID) AS 'NUMERO_FUNCIONARIOS', AVG(SALARY) AS 'MEDIA_SALARIO'
FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING `NUMERO_FUNCIONARIOS` > 10;

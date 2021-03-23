create database frozenlogic_task;

use frozenlogic_task;


-- Each node of the tree will have a parent as a reference
-- The main node , in this case the m (meter) will have no parent
-- Each node will have a value relative to 1 m (the root node)
CREATE TABLE unit_model (
    id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    title varchar(20) NOT NULL,
    relativeValue DOUBLE NOT NULL,
    parent_id INT(10) UNSIGNED DEFAULT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (parent_id)
        REFERENCES unit_model (id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

-- Inserting data

-- root
insert into unit_model(title, relativeValue, parent_id) values('meter (m)', 1 , NULL);

-- up units
insert into unit_model(title, relativeValue, parent_id) values('decameter (dcm)', 10 , 1);
insert into unit_model(title, relativeValue, parent_id) values('hectometer (hm)', 100 , 2);
insert into unit_model(title, relativeValue, parent_id) values('kilometer (km)', 1000 , 3);

-- down units
insert into unit_model(title, relativeValue, parent_id) values('decimeter (dcm)', 0.1 , 1);
insert into unit_model(title, relativeValue, parent_id) values('centimeter (hm)', 0.01 , 5);
insert into unit_model(title, relativeValue, parent_id) values('milimeter (km)', 0.001 , 6);
# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## data
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null

## charts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users), indexed
data_id     | integer   | not null, foreign key (references data), indexed
type        | string    | not null
x-axis-data | string    | not null
y-axis-data1| string    | not null
y-axis-data2| string    |
y-axis-data3| string    |
title       | string    | not null
x-axis-title| string    | not null
y-axis-title| string    | not null

## dashboards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null

## dashboard_slots
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
slot        | integer   | not null
chart_id    | integer   | not null, foreign key (references charts), indexed
dashboard_id| integer   | not null, foreign key (references dashboards), indexed

## chart_authentications
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
chart_id    | integer   | not null, foreign key (references charts), indexed
user_id     | integer   | not null, foreign key (references users), indexed

## dashboards_authentications
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
dashboard_id| integer   | not null, foreign key (references dashboards), indexed
user_id     | integer   | not null, foreign key (references users), indexed

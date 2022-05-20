import React from 'react'

const BcaDBMS = () => {
    return (
        <div className='Dbms'>
              <span className='BcaHeading'>BACHELOR OF COMPUTER APPLICATIONS (BCA) DETAILED SYLLABUS</span>
            <hr />
            <div>
            <h3>Paper: Database Management System </h3>
            </div>
        <hr />
            <span><h4>UNIT-1</h4></span>
            <hr />
            <p><h4>Introduction :</h4>Introduction: An overview of database management system, database system Vs file system, Characteristics of database approach, DBMS architecture , data models, schema and instances, data independence.
            <h4>Data Modeling using Entity Relationship Model :</h4>Data Modeling using Entity Relationship Model: Entity, Entity types, entity set, notation for ER diagram, attributes and keys, Concepts of composite,derived and multivalued attributes, Super Key, candidate key, primary key, relationships, relation types, weak entities, enhanced E-R and object modeling, Sub Classes:, Super classes, inheritance, specialization and generalization.</p>
        <hr />
            <span><h4>UNIT-2</h4></span>
            <hr />
            <p><h4>Introduction to SQL :</h4> Introduction to SQL: Overview , Characteristics of SQL. Advantage of SQL, SQL data types and literals.
            <h4>Types of SQL commands :</h4>Types of SQL commands: DDL, DML, DCL. Basic SQL Queries.
            <h4>Logical operators :</h4>Logical operators :BETWEEN, IN, AND, OR and NOT.
            <h4>Null Values :</h4>Disallowing Null Values, Comparisons Using Null Values.
            <h4>Integrity constraints :</h4>Integrity constraints: Primary Key, Not NULL, Unique, Check, Referential key Introduction to Nested Queries, Correlated Nested Queries, Set-Comparison Operators, Aggregate Operators: The GROUP BY and HAVING Clauses.
            <h4>Joins :</h4>Joins: Inner joins, Outer Joins, Left outer, Right outer, full outer joins. Overview of views and indexes.</p>
        <hr />
            <span><h4>UNIT-3</h4></span>
            <hr />
            <p><h4>Relational Data Model :</h4>Relational Data Model: Relational model terminology domains, Attributes, Tuples, Relations, characteristics of relations, relational constraints domain constraints, key constraints and constraints on null, relational DB schema.Codd’s Rules.
            <h4>Relational algebra :</h4>Relational algebra: Basic operations selection and projection, Set Theoretic operations Union, Intersection, set difference and division.
            <h4>Join operations :</h4>Join operations: Inner , Outer ,Left outer, Right outer and full outer join.
            <h4>ER to relational Mapping : </h4>ER to relational Mapping: Data base design using ER to relational language.
            <h4>Data Normalization :</h4> Data Normalization: Functional dependencies, Armstrong’s inference rule, Normal form up to 3 rd normal form.</p>
        <hr />    
            <span><h4>UNIT-4</h4></span>
            <hr />
           <p><h4>Transaction processing and Concurrency Control :</h4>Transaction processing and Concurrency Control: Definition of Transaction, Desirable ACID properties, overview of serializability, serializable and non serializable transactions.
           <h4>Concurrency Control :</h4>Concurrency Control: Definition of concurrency, lost update, dirty read and incorrect summary problems due to concurrency.
           <h4>Concurrency Control Techniques :</h4>Concurrency Control Techniques: Overview of Locking,2PL,Timstamp ordering, multiversioning, validation.
           <h4>Elementary concepts of Database security :</h4>Elementary concepts of Database security: system failure, Backup and Recovery Techniques, authorization and authentication.</p>
        <hr />
       

        </div>
    )
}

export default BcaDBMS

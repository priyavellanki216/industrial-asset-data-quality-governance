# Industrial Asset Data Quality & Governance Platform

> An end-to-end data management platform for ingesting, validating, cleansing, governing, transforming, and monitoring industrial asset data.

[![Python](https://img.shields.io/badge/Python-3.11+-blue)](https://www.python.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue)](https://www.postgresql.org/)
[![Apache Airflow](https://img.shields.io/badge/Apache%20Airflow-Orchestration-red)](https://airflow.apache.org/)
[![dbt](https://img.shields.io/badge/dbt-Transformations-orange)](https://www.getdbt.com/)
[![Great Expectations](https://img.shields.io/badge/Great%20Expectations-Data%20Quality-green)](https://greatexpectations.io/)
[![AWS](https://img.shields.io/badge/AWS-S3%20%7C%20RDS-yellow)](https://aws.amazon.com/)
[![Git](https://img.shields.io/badge/Git-Version%20Control-black)](https://git-scm.com/)

---

## Overview

The **Industrial Asset Data Quality & Governance Platform** is an enterprise-style data management project designed to address common challenges in industrial asset data:

- Incomplete records
- Duplicate assets
- Invalid values
- Inconsistent formats
- Referential integrity issues
- Poor data traceability
- Lack of standardized metadata
- Limited visibility into data quality
- Uncontrolled access to governed datasets

The platform implements a complete data lifecycle:

**Ingestion → Profiling → Validation → Cleansing → Transformation → Governance → Quality Monitoring → Analytics**

The project uses engineering-oriented data and demonstrates how raw operational data can be transformed into reliable, governed, and analytics-ready datasets.

> **Important:** This is an independent portfolio project. It does not represent an actual production system or affiliation with any organization referenced by the datasets.

---

# Business Problem

Industrial organizations depend on accurate asset and maintenance data for operational analysis, maintenance planning, reporting, and decision-making.

However, data arriving from different systems can contain:

- Missing identifiers
- Duplicate asset records
- Invalid measurements
- Inconsistent categorical values
- Incorrect date formats
- Broken relationships between assets and plants
- Missing metadata
- Untracked data-quality issues

Without automated validation and governance, these problems can propagate into analytical systems and dashboards.

This project addresses that problem by implementing an automated and auditable data-management pipeline.

---

# Objectives

The platform is designed to:

1. Ingest industrial asset data from structured sources.
2. Preserve raw source data.
3. Profile datasets before transformation.
4. Detect data-quality issues automatically.
5. Cleanse and standardize valid data.
6. Quarantine invalid records instead of silently discarding them.
7. Store governed data in PostgreSQL.
8. Maintain metadata and data dictionaries.
9. Track source-to-target data lineage.
10. Monitor data-quality metrics.
11. Orchestrate repeatable pipelines.
12. Apply database access controls.
13. Provide analytics-ready datasets.
14. Visualize data-quality and operational metrics.

---

# Architecture

```text
                    DATA SOURCES
                         |
          +--------------+--------------+
          |              |              |
       CSV/Files       Excel       External Data
          |              |              |
          +--------------+--------------+
                         |
                         v
                  AWS S3 / Raw Layer
                         |
                         v
                  Apache Airflow
                         |
                         v
                  Data Profiling
                         |
                         v
                Schema Validation
                         |
                         v
              Great Expectations
                         |
              +----------+----------+
              |                     |
            VALID                 INVALID
              |                     |
              v                     v
       Data Cleansing          Quarantine
              |
              v
             dbt
              |
              v
       PostgreSQL / AWS RDS
              |
       +------+-------+
       |              |
       v              v
 Data Governance   Analytics
       |              |
       +------+-------+


              |
              v
          Tableau / BI

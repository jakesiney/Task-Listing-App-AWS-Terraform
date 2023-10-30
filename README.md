# Task Listing App deployed to AWS using Terraform insfrastuture

This repo contains an Angular and Express application that I used to create a CI/CD pipline using Terraform.



### Application Architecture

```mermaid
graph LR
    GitHub(GitHub repo)--> CICD(GitHub CI/CD)
    CICD --> ECR(Amazon Elastic Container Registry)
    CICD --> S3(Amazon S3 Deploy bucket)
    ECR --> EB(Amazon Elastic Beanstalk App)
    S3 --> EB
    EB --> DB[(Amazon RDS)]
```

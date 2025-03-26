# 🚀 Project Name

## 📌 Table of Contents
- [Introduction](#introduction)
- [Demo](#demo)
- [Inspiration](#inspiration)
- [What It Does](#what-it-does)
- [How We Built It](#how-we-built-it)
- [Challenges We Faced](#challenges-we-faced)
- [How to Run](#how-to-run)
- [Tech Stack](#tech-stack)
- [Team](#team)

---

## 🎯 Introduction
An AI-powered recommendation system using Astra DB and NV-Embed-QA leverages Astra DB's scalability and low-latency vector search to store and query customer profiles and embeddings. NV-Embed-QA generates high-quality semantic embeddings for customer preferences and transactions, enabling accurate, real-time personalized recommendations.


## 🎥 Demo
🔗 [Live Demo](#) (if applicable)  
📹 [Video Demo](#) its in artifacts/demo/Demo.mp4
🖼️ Screenshots:

![Screenshot 1](link-to-image)

## 💡 Inspiration
Modern customers demand highly personalized experiences tailored to their unique preferences. However, businesses often struggle to meet these expectations due to limitations in data utilization, recommendation accuracy, and scalability.

## ⚙️ What It Does

Recommendations are dynamically displayed in the user interface based on his interests, preferences (e.g., "Cards you may like").


## 🛠️ How We Built It
An AI-powered recommendation system using Astra DB and NV-Embed-QA leverages Astra DB's scalability and low-latency vector search to store and query customer profiles and embeddings. NV-Embed-QA generates high-quality semantic embeddings for customer preferences and transactions, enabling accurate, real-time personalized recommendations.

Tech stack:
GenAI Model:	NV-Embed-QA
Dimensions: 1024
Similarity: Cosine
Languages: 	Typescript
UI Library: 	React, Next JS
Backend: 	Node.js, Astra DB, Open AI



## 🚧 Challenges We Faced
Lack of Data Integration:
Businesses fail to effectively integrate and analyze customer data from multiple sources, leading to incomplete customer profiles.
Low Recommendation Accuracy:
Recommendations are often generic and fail to align with individual customer preferences, reducing engagement and satisfaction.
Scalability Challenges:
Existing systems struggle to handle large datasets and provide real-time personalized recommendations at scale.
Inadequate Similarity Matching:
Poor algorithms for identifying similar transactions or preferences result in irrelevant suggestions.
Limited Context Awareness:
Recommendations lack contextual understanding, such as recent customer behavior or trends.
Customer Frustration:
Generic or irrelevant recommendations lead to customer dissatisfaction and reduced loyalty.
High Development Complexity:
Building and maintaining personalized recommendation systems require significant technical expertise and resources.
Privacy Concerns:
Customers are increasingly concerned about how their data is collected and used, creating trust issues.

## 🏃 How to Run
1. Clone the repository  
   ```sh
   git clone git@github.com:ewfx/aidhp-amigos.git
   ```
2. navigate to source code
```sh
   cd code/src
 ```  
3. Install dependencies  
   ```sh
   npm install 
   ```
4. Run the project  
   ```sh
   npm run dev  
   ```
5. Not able to add astra db collection endpoint as it requires sharing of secrets, so will not be able to run(Need to have a .env file with ASTRA_DB_NAMESPACE,ASTRA_DB_COLLECTION,ASTRA_DB_API_ENDPOINT,ASTRA_DB_APPLICATION_TOKEN)   

## 🏗️ Tech Stack
- 🔹 Frontend: React / Vue / Angular
- 🔹 Backend: Node.js / FastAPI / Django
- 🔹 Database: PostgreSQL / Firebase
- 🔹 Other: OpenAI API / Twilio / Stripe

## 👥 Amigos Team
- Molanguri Sai Yashwanth- [GitHub](#) | [LinkedIn](#)
- Vikranth - [GitHub](#) | [LinkedIn](#)
- Manjunath
- Gautham
# ICS Portal

## Overview

Platform for connecting workers with clients in a human-centered, respectful way. Focused on domestic and care services.

### Services

- Drivers  
- Newborn Yaya  
- Elderly Care  
- Cooks  
- House Assistance  
- Pink Collared Workers
- etc....

## Tech Stack

- **Frontend:** Angular  
- **Backend:** .NET 9 (ASP.NET Core Web API)  
- **Database:** PostgreSQL / SQL Server  
- **API:** REST API  

## Features

- Worker Profiles (skills, experience, availability)  
- Human-centered recruitment flow  
- Services list & details pages  
- About Us & Values pages  
- Request Service Form integrated with CRM  
- Admin dashboard (manage workers, services, and requests)  

---

## Project Structure

/frontend

/backend

/docs

.env.example

README.md

---

## Setup & Run Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Ayasser233/ics-portal.git
cd ics-portal
```

## 2. Backend Setup (.NET)

```bash
open backend folder:
    
cd backend/IcsBackend
cp ../.env.example ../.env
dotnet restore
dotnet run
```

## 3. Frontend Setup (Angular)

```bash
Open frontend folder:

cd ../../frontend
cp .env.example .env

npm install
ng serve

```

## 4 Recommended Branches

main → Production

dev → Development / Testing

git checkout -b dev
git push -u origin dev

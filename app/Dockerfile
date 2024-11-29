# Pull official base image
FROM python:3.11.4-slim-buster

# Set work directory
WORKDIR /app

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Update system packages and install dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    libsqlite3-dev \
    libpq-dev \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Upgrade pip and install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# Copy project files into container
COPY . .

# Expose port for Cloud Run (default is 8080)
EXPOSE 8080

# Command to run the application (if needed)
CMD ["python", "manage.py", "runserver", "0.0.0.0:8080"]

/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  background-color: #f4faff;
  color: #333;
  padding: 0 20px;
}

/* Header */
header {
  background-color: #004aad; /* blue */
  color: white;
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 20px;
}

nav ul {
  list-style: none;
  display: flex;
  padding-right: 20px;
}

nav ul li {
  margin-left: 20px;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

/* Hero Section */
.hero {
  background-color: #e8f1ff;
  text-align: center;
  padding: 60px 20px;
}

.hero h1 {
  font-size: 2.5rem;
  color: #004aad;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.btn {
  background-color: #ffc800; /* yellow */
  color: #004aad;
  padding: 12px 25px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.btn:hover {
  background-color: #e0b300;
}

/* Services Section */
.services {
  padding: 40px 0;
  background-color: white;
}

.services h2 {
  color: #004aad;
  text-align: center;
  margin-bottom: 20px;
}

.services ul {
  max-width: 600px;
  margin: 0 auto;
  list-style: none;
  padding-left: 20px;
}

.services li {
  font-size: 1.1rem;
  margin-bottom: 10px;
}

/* About Section */
.about {
  padding: 40px 0;
  background-color: #f0f8ff;
  text-align: center;
}

.about h2 {
  color: #004aad;
  margin-bottom: 10px;
}

.about p {
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.1rem;
}

/* Contact Section */
.contact {
  padding: 40px 0;
  text-align: center;
}

.contact h2 {
  color: #004aad;
  margin-bottom: 10px;
}

.contact form {
  max-width: 500px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact input,
.contact textarea {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

.contact button {
  background-color: #004aad;
  color: white;
  border: none;
  padding: 12px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.contact button:hover {
  background-color: #003a91;
}

/* Footer */
footer {
  background-color: #004aad;
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: 40px;
}

/* Responsive tweaks */
@media (max-width: 600px) {
  nav ul {
    flex-direction: column;
    align-items: center;
  }

  nav ul li {
    margin: 10px 0;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .btn {
    font-size: 1rem;
  }
}

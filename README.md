# Keming Xing - Personal Academic Website

A modern, responsive personal academic website showcasing education, projects, courses, certifications, and professional experience. Built with vanilla HTML, CSS, and JavaScript.

## 🌟 Features

- **Bilingual Support**: English and Chinese with one-click language switching
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Separate Pages**: Each course and project has its own dedicated page for better organization and SEO
- **Certifications**: Display of professional certifications and achievements
- **Portfolio Showcase**: Featured projects highlighting SDE, MLE, and DS capabilities

## 📁 Project Structure

```
.
├── index.html                      # Homepage
├── cv.html                         # Curriculum Vitae
├── courses.html                    # Course listing page
├── projects.html                   # Project listing page
├── courses/                        # Individual course pages
│   ├── fall-2020.html
│   ├── spring-2021.html
│   └── ...
├── projects/                       # Individual project pages
│   ├── enterprise-attendance-management-system.html
│   ├── capstone-project.html
│   └── ...
├── assets/
│   ├── css/
│   │   └── main.css               # Main stylesheet
│   └── js/
│       └── main.js                # Language switching and navigation
├── images/                         # Images and photos
│   └── profile.png
├── files/                          # PDF files (resume, etc.)
│   ├── Keming_Xing_Resume.pdf
│   └── Capstone_FinalProjectReport.pdf
├── start-server.py                 # Local development server (Python)
├── start-server.bat               # Windows server script
├── start-server.sh                # Linux/Mac server script
└── CNAME                          # Custom domain configuration
```

## 🚀 Quick Start

### Local Development

To test the website locally, use the included server scripts:

**Windows:**
```cmd
start-server.bat
```

**Linux/Mac:**
```bash
chmod +x start-server.sh
./start-server.sh
```

**Or directly with Python:**
```bash
python start-server.py
```

The server will start on `http://localhost:8000` and automatically open your browser.

For detailed local testing instructions, see `LOCAL_TESTING.md`.

## 📝 Adding New Content

### Adding a New Course Page

1. Create a new HTML file in the `courses/` directory (e.g., `courses/spring-2026.html`)
2. Copy the structure from an existing course page
3. Update the course information with bilingual content using `data-en` and `data-zh` attributes
4. Add the course to `courses.html` listing page

### Adding a New Project Page

1. Create a new HTML file in the `projects/` directory (e.g., `projects/new-project.html`)
2. Copy the structure from an existing project page
3. Update the project information with bilingual content
4. Add the project to `projects.html` listing page with appropriate category

## 🎨 Customization

### Changing Colors

Edit `assets/css/main.css` and modify the CSS variables:

```css
:root {
    --primary-color: #your-color;
    --primary-dark: #your-dark-color;
    --secondary-color: #your-secondary-color;
    /* ... */
}
```

### Adding New Sections

All pages use a consistent structure. Simply add new sections following the existing pattern with proper bilingual attributes.

## 🌐 Language Support

The website uses `data-en` and `data-zh` attributes for bilingual content:

```html
<p data-en="English text here" data-zh="中文内容在这里">
    English text here
</p>
```

**Important Rules:**
- English content should only contain English (technical terms like Python, OpenCV are allowed)
- Chinese content should only contain Chinese (technical terms are allowed)
- Always provide both `data-en` and `data-zh` attributes

## 📚 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables, Flexbox, and Grid
- **JavaScript**: Vanilla JS for language switching and navigation
- **Font Awesome**: Icons
- **Python HTTP Server**: Local development server

## 📄 License

© 2025 Keming Xing. All rights reserved.

## 🔗 Links

- **Live Website**: [Your website URL]
- **GitHub Repository**: [Your GitHub repo URL]

---

For deployment and maintenance instructions, see the separate deployment guide (not included in this repository).

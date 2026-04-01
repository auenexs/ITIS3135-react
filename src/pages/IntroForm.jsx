import { useState } from "react";
import "./IntroForm.css";

const initialFormData = {
  firstName: "Tyler",
  middleName: "",
  nickname: "",
  lastName: "Bland",
  mascotAdj: "Tranquil",
  mascotAnimal: "Badger",
  divider: "|",
  pictureCaption: "Took a spray painting class in Miami",
  personalStatement: "I am a senior in my first semester, majoring in Computer Science with a concentration in IT. I'm super excited to take this class, as this will be my second time working with HTML.",
  personalBg: "I'm 26 years old and I'm interested in Cybersecurity",
  professionalBg: "My experience consists of numerous small projects. I was also a data annotator for some time",
  academicBg: "I've been in college since 2019, I transferred here from University of Houston in 2024",
  subjectBg: "I took a web application development class at UH, but it didn't transfer. Excited to have a refresher",
  primaryComputer: "Custom desktop; Windows",
  backupComputer: '2024 Macbook Pro 14"; If needed, library',
  quote: "Stay hungry, stay foolish",
  quoteAuthor: "Steve Jobs",
  funnyThing: "I'm from Houston, TX",
  share: "My Experience varies but I feel super comfortable about my foundationals",
};

const initialCourses = [
  { dept: "ITIS", num: "3135", name: "Front End Web Development", reason: "I loved the class I took at UH so I'm equally excited" },
  { dept: "ITIS", num: "3130", name: "Human-Centered Computing", reason: "Taking this class as a requirement" },
  { dept: "ITIS", num: "3200", name: "Introduction to Information Security & Privacy", reason: "I've been interested in Cybersecurity for a long time, so this class I was most excited about taking" },
  { dept: "STAT", num: "2223", name: "Elements of Statistics II", reason: "This class is also a requirement" },
];

const initialLinks = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/tybland" },
  { label: "GitHub", url: "https://github.com/auenexs" },
  { label: "GitHub.io", url: "https://auenexs.github.io" },
  { label: "freeCodeCamp", url: "https://www.freecodecamp.org/auenexs" },
  { label: "CLT Web", url: "https://webpages.charlotte.edu/tbland6/" },
];

export default function IntroForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [courses, setCourses] = useState(initialCourses);
  const [links, setLinks] = useState(initialLinks);
  const [pictureFile, setPictureFile] = useState(null);
  const [picturePreview, setPicturePreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleCourseChange = (index, field, value) => {
    setCourses((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleLinkChange = (index, field, value) => {
    setLinks((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const addCourse = () => {
    setCourses((prev) => [...prev, { dept: "", num: "", name: "", reason: "" }]);
  };

  const removeCourse = (index) => {
    setCourses((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPictureFile(file);
      const reader = new FileReader();
      reader.onload = (e) => setPicturePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const validate = () => {
    const requiredFields = [
      "firstName", "lastName", "mascotAdj", "mascotAnimal", "divider",
      "pictureCaption", "personalStatement", "personalBg", "professionalBg",
      "academicBg", "subjectBg", "primaryComputer", "backupComputer",
      "quote", "quoteAuthor"
    ];
    const newErrors = {};
    requiredFields.forEach((field) => {
      if (!formData[field]?.trim()) newErrors[field] = true;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    } else {
      alert("Please fill out all required fields before submitting.");
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setCourses(initialCourses);
    setLinks(initialLinks);
    setPictureFile(null);
    setPicturePreview(null);
    setErrors({});
  };

  const handleClear = () => {
    setFormData(Object.fromEntries(Object.keys(formData).map((k) => [k, ""])));
    setCourses([{ dept: "", num: "", name: "", reason: "" }]);
    setLinks(initialLinks.map(() => ({ label: "", url: "" })));
    setPictureFile(null);
    setPicturePreview(null);
  };

  // Build display name
  const nameParts = [formData.firstName, formData.middleName, formData.lastName].filter(Boolean).join(" ");
  const displayName = formData.nickname ? `${nameParts} (${formData.nickname})` : nameParts;
  const heading = `${displayName} ${formData.divider} ${formData.mascotAdj} ${formData.mascotAnimal}`;
  const imgSrc = picturePreview || "/images/Me.jpg";

  if (submitted) {
    return (
      <main className="intro-result">
        <h2>Introduction Form</h2>
        <h1>{heading}</h1>
        <figure>
          <img src={imgSrc} alt={displayName} width="300" />
          <figcaption>{formData.pictureCaption}</figcaption>
        </figure>
        <p>{formData.personalStatement}</p>
        <ul>
          <li><b>Personal Background:</b> {formData.personalBg}</li>
          <li><b>Professional Background:</b> {formData.professionalBg}</li>
          <li><b>Academic Background:</b> {formData.academicBg}</li>
          <li><b>Background in Subject:</b> {formData.subjectBg}</li>
          <li><b>Primary Work Computer & Location:</b> {formData.primaryComputer}</li>
          <li><b>Backup Work Computer & Location Plan:</b> {formData.backupComputer}</li>
          <li>
            <b>Current Courses:</b>
            <ol>
              {courses.filter((c) => c.dept || c.num || c.name).map((course, i) => (
                <li key={i}>
                  <b>{course.dept} {course.num} - {course.name}:</b> {course.reason}
                </li>
              ))}
            </ol>
          </li>
          {formData.funnyThing && <li><b>Fun Thing About Me:</b> {formData.funnyThing}</li>}
          {formData.share && <li><b>I'd also like to share:</b> {formData.share}</li>}
        </ul>
        <blockquote>
          "{formData.quote}" <br /><cite>- {formData.quoteAuthor}</cite>
        </blockquote>
        <button type="button" onClick={() => setSubmitted(false)}>Edit / Start Over</button>
      </main>
    );
  }

  return (
    <main className="intro-form-page">
      <h2>Introduction Form</h2>
      <h3>Please fill out the form below to generate your introduction page.</h3>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Information</legend>
          <label>First Name: <span>*</span></label>
          <input name="firstName" value={formData.firstName} onChange={handleChange} required style={errors.firstName ? { outline: "2px solid red" } : {}} />

          <label>Middle Name or Initial: <span>(optional)</span></label>
          <input name="middleName" value={formData.middleName} onChange={handleChange} />

          <label>Nickname / Preferred Name: <span>(optional)</span></label>
          <input name="nickname" value={formData.nickname} onChange={handleChange} />

          <label>Last Name: <span>*</span></label>
          <input name="lastName" value={formData.lastName} onChange={handleChange} required style={errors.lastName ? { outline: "2px solid red" } : {}} />
        </fieldset>

        <fieldset>
          <legend>Page Identity</legend>
          <label>Mascot Adjective: <span>*</span></label>
          <input name="mascotAdj" value={formData.mascotAdj} onChange={handleChange} placeholder="e.g. Tranquil" required style={errors.mascotAdj ? { outline: "2px solid red" } : {}} />

          <label>Mascot Animal: <span>*</span></label>
          <input name="mascotAnimal" value={formData.mascotAnimal} onChange={handleChange} placeholder="e.g. Badger" required style={errors.mascotAnimal ? { outline: "2px solid red" } : {}} />

          <label>Divider Character: <span>*</span></label>
          <input name="divider" value={formData.divider} onChange={handleChange} placeholder="e.g. ~, |" required style={errors.divider ? { outline: "2px solid red" } : {}} />
        </fieldset>

        <fieldset>
          <legend>Profile Picture</legend>
          <label>Upload Picture: <span>(optional)</span></label>
          <input type="file" accept="image/*" onChange={handleFileChange} />

          <label>Picture Caption: <span>*</span></label>
          <input name="pictureCaption" value={formData.pictureCaption} onChange={handleChange} required style={errors.pictureCaption ? { outline: "2px solid red" } : {}} />
        </fieldset>

        <fieldset>
          <legend>Personal Statement</legend>
          <label>Personal Statement: <span>*</span></label>
          <textarea name="personalStatement" value={formData.personalStatement} onChange={handleChange} required style={errors.personalStatement ? { outline: "2px solid red" } : {}} />
        </fieldset>

        <fieldset>
          <legend>Background</legend>
          <label>Personal Background: <span>*</span></label>
          <textarea name="personalBg" value={formData.personalBg} onChange={handleChange} required style={errors.personalBg ? { outline: "2px solid red" } : {}} />

          <label>Professional Background: <span>*</span></label>
          <textarea name="professionalBg" value={formData.professionalBg} onChange={handleChange} required style={errors.professionalBg ? { outline: "2px solid red" } : {}} />

          <label>Academic Background: <span>*</span></label>
          <textarea name="academicBg" value={formData.academicBg} onChange={handleChange} required style={errors.academicBg ? { outline: "2px solid red" } : {}} />

          <label>Background in Subject: <span>*</span></label>
          <textarea name="subjectBg" value={formData.subjectBg} onChange={handleChange} required style={errors.subjectBg ? { outline: "2px solid red" } : {}} />

          <label>Primary Work Computer & Location: <span>*</span></label>
          <input name="primaryComputer" value={formData.primaryComputer} onChange={handleChange} required style={errors.primaryComputer ? { outline: "2px solid red" } : {}} />

          <label>Backup Work Computer & Location Plan: <span>*</span></label>
          <input name="backupComputer" value={formData.backupComputer} onChange={handleChange} required style={errors.backupComputer ? { outline: "2px solid red" } : {}} />
        </fieldset>

        <fieldset>
          <legend>Current Courses</legend>
          {courses.map((course, index) => (
            <fieldset key={index} className="course-entry">
              <legend>Course {index + 1}</legend>
              <label>Department:</label>
              <input value={course.dept} onChange={(e) => handleCourseChange(index, "dept", e.target.value)} placeholder="e.g. ITIS" />
              <label>Course Number:</label>
              <input value={course.num} onChange={(e) => handleCourseChange(index, "num", e.target.value)} placeholder="e.g. 3135" />
              <label>Course Name:</label>
              <input value={course.name} onChange={(e) => handleCourseChange(index, "name", e.target.value)} />
              <label>Reason:</label>
              <textarea value={course.reason} onChange={(e) => handleCourseChange(index, "reason", e.target.value)} />
              {courses.length > 1 && (
                <button type="button" onClick={() => removeCourse(index)}>Delete Course</button>
              )}
            </fieldset>
          ))}
          <button type="button" onClick={addCourse}>Add Course</button>
        </fieldset>

        <fieldset>
          <legend>Quote</legend>
          <label>Quote: <span>*</span></label>
          <textarea name="quote" value={formData.quote} onChange={handleChange} required style={errors.quote ? { outline: "2px solid red" } : {}} />

          <label>Quote Author: <span>*</span></label>
          <input name="quoteAuthor" value={formData.quoteAuthor} onChange={handleChange} required style={errors.quoteAuthor ? { outline: "2px solid red" } : {}} />
        </fieldset>

        <fieldset>
          <legend>Optional Extras</legend>
          <label>Funny Thing About You: <span>(optional)</span></label>
          <textarea name="funnyThing" value={formData.funnyThing} onChange={handleChange} />

          <label>Something I'd Like to Share: <span>(optional)</span></label>
          <textarea name="share" value={formData.share} onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>Links</legend>
          {links.map((link, index) => (
            <div key={index} className="link-entry">
              <label>Link {index + 1} Label:</label>
              <input value={link.label} onChange={(e) => handleLinkChange(index, "label", e.target.value)} placeholder="e.g. LinkedIn" />
              <label>Link {index + 1} URL:</label>
              <input type="url" value={link.url} onChange={(e) => handleLinkChange(index, "url", e.target.value)} placeholder="https://" />
            </div>
          ))}
        </fieldset>

        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>Reset</button>
          <button type="button" onClick={handleClear}>Clear</button>
        </div>
      </form>
    </main>
  );
}

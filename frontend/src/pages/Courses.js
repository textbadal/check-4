import React from 'react';
import './Courses.css';

const courses = [
  {
    coursesList: [
      { title: 'Web Development', imageUrl: '/images/webdev.jpg', description: 'Build dynamic and responsive websites using modern tools and technologies.', oldPrice: '₹5000', newPrice: '₹4000' },
      { title: 'Artificial Intelligence', imageUrl: '/images/ai.jpg', description: 'Dive into the world of AI and machine learning algorithms.', oldPrice: '₹6000', newPrice: '₹4500' },
      { title: 'AutoCAD Civil 3D', imageUrl: '/images/3d.WebP', description: 'Learn the fundamentals of AutoCAD 3D.', oldPrice: '₹7000', newPrice: '₹5500' },
      { title: 'Revit', imageUrl: '/images/revit.jpg', description: 'Learn the fundamentals of Revit.', oldPrice: '₹6500', newPrice: '₹5000' },
      { title: 'STAAD PRO', imageUrl: '/images/staad.jpg', description: 'Learn the fundamentals of STAAD PRO.', oldPrice: '₹6000', newPrice: '₹4500' },
      { title: 'AutoCAD 2D', imageUrl: '/images/autocad-2016-1.jpg', description: 'Learn the fundamentals of AutoCAD 2D.', oldPrice: '₹5500', newPrice: '₹4000' }
    ]
  },
  {
    coursesList: [
      { title: 'Java Programming', imageUrl: '/images/java.jpg', description: 'Start your Programming Journey with Java Programming.', oldPrice: '₹3000', newPrice: '₹2000' },
      { title: 'Python Programming', imageUrl: '/images/python.jpg', description: 'Start your Programming Journey with Python Programming.', oldPrice: '₹3000', newPrice: '₹2500' },
      { title: 'C Programming', imageUrl: '/images/c.jpg', description: 'Start your Programming Journey with C Programming.', oldPrice: '₹2500', newPrice: '₹1800' }
    ]
  },
  {
    coursesList: [
      { title: 'Digital Marketing', imageUrl: '/images/digital.WebP', description: 'Gain Expertise in Digital Marketing.', oldPrice: '₹5000', newPrice: '₹3800' },
      { title: 'WordPress Web Development', imageUrl: '/images/word.jpg', description: 'Master WordPress Web Development.', oldPrice: '₹4500', newPrice: '₹3000' },
      { title: 'Machine Learning', imageUrl: '/images/machine.jpg', description: 'Learn Machine Learning to create models that enable computers to learn from data and make predictions.', oldPrice: '₹7000', newPrice: '₹6000' }
    ]
  }
];

const Courses = () => {
  return (
    <div className="courses-container">
      <h1>Our Courses</h1>
      {courses.map((courseCategory, index) => (
        <div className="course-category" key={index}>
          <div className="courses-list">
            {courseCategory.coursesList.map((course, idx) => (
              <div className="course-card" key={idx}>
                <img src={course.imageUrl} alt={course.title} className="course-image" />
                <div className="course-info">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <div className="course-pricing">
                    <span className="old-price">₹{course.oldPrice}</span>
                    <span className="new-price">₹{course.newPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;

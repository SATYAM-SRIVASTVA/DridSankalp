import React,{useState} from 'react'
import './Notesupdate.css'

const Notesupdate = () => {
    const [serviceList, setServiceList] = useState([{ service: "" }]);
    const [courseList, setCourseList] = useState([{ course: "" }]);
    const [id, setId] = useState();
    const [topic, setTopic] = useState();
    const [subject, setSubject] = useState();
    const [price, setPrice] = useState();
    const [about, setAbout] = useState();
    const [noteslink, setNotesLink] = useState();

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleCourseChange = (e, index) => {
    const { name, value } = e.target;
    const course = [...courseList];
    course[index][name] = value;
    setCourseList(course);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleCourseRemove = (index) => {
    const course = [...courseList];
    course.splice(index, 1);
    setCourseList(course);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };

  const handleCourseAdd = () => {
    setCourseList([...courseList, { course: "" }]);
  };


  return (
    <>
 <form className="App" autoComplete="off">
      <div className=" notesupdate form-field">
        <label htmlFor="service">Notes data</label>
        <input type="text" placeholder="Id"  onChange={e => setId(e.target.value)} required />
        <input type="text" placeholder="Topic" onChange={e => setTopic(e.target.value)} required />
        <input type="text" placeholder="Subject" onChange={e => setSubject(e.target.value)} required />
        <input type="text" placeholder="Price" onChange={e => setPrice(e.target.value)} required />
        <input type="text" placeholder="About" onChange={e => setAbout(e.target.value)} required />
        <input type="text" placeholder="Notes Link" onChange={e => setNotesLink(e.target.value)} required />

        {serviceList.map((singleService, index) => (
          <div key={index} className="services">
            <div className="first-division">
              <input
              placeholder="What You Learn"
                name="service"
                type="text"
                id="service"
                value={singleService.service}
                onChange={(e) => handleServiceChange(e, index)}
                required
              />
              {serviceList.length - 1 === index && serviceList.length < 4 && (
                <button
                  type="button"
                  onClick={handleServiceAdd}
                  className="add-btn"
                >
                  <span>Add a Service</span>
                </button>
              )}
            </div>
            <div className="second-division">
              {serviceList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleServiceRemove(index)}
                  className="remove-btn"
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}

{courseList.map((singleCourse, index) => (
          <div key={index} className="services">
            <div className="first-division">
              <input
              placeholder="Course"
                name="course"
                type="text"
                id="course"
                value={singleCourse.course}
                onChange={(e) => handleCourseChange(e, index)}
                required
              />
              {courseList.length - 1 === index && courseList.length < 4 && (
                <button
                  type="button"
                  onClick={handleCourseAdd}
                  className="add-btn"
                >
                  <span>Add a Course</span>
                </button>
              )}
            </div>
            <div className="second-division">
              {courseList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleCourseRemove(index)}
                  className="remove-btn"
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    
    </form>
    </>
  )
}

export default Notesupdate
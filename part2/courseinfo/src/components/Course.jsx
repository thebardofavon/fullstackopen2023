const Header = ({ header }) => {
    return (
        <h1>{header.name}</h1>
    )
}

const Part = ({ part }) => {
    return (
        <p>{part.name} {part.exercises}</p>
    )
}

const Content = ({ content }) => {
    return (
        <div>
            {/*<Part part={content.parts[0]}/>*/}
            {/*<Part part={content.parts[1]}/>*/}
            {/*<Part part={content.parts[2]}/>*/}
            {/*<Part part={content.parts[3]}/>*/}
            {content.parts.map(part => (
                <Part key={part.id} part={part} />
            ))}
        </div>
    )
}

const Total = ({ courses }) => {
    // const sum = props.courses.parts[0].exercises + props.courses.parts[1].exercises + props.courses.parts[2].exercises + props.courses.parts[3].exercises
    const sum = courses.parts.reduce((total, part) => total + part.exercises, 0)
    return (
        <p><b>total of {sum} exercises</b></p>
    )
}

const DisplayCourse = ({ course }) => {
    return (
        <div>
            <Header header={course} />
            <Content content={course}/>
            <Total courses={course} />
        </div>
    )
}
const Course = ({ course }) => {
    return (
        <div>
            {course.map(c => (
                <DisplayCourse key={c.id} course={c} />
            ))}
        </div>
    )
}

export default Course
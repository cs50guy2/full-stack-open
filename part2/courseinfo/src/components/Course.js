import { courseType, headerType, partsType, partType, sumType } from '../types';

function Header({ header }) {
  return <h1>{header}</h1>;
}

function Total({ sum }) {
  return <p>Number of exercises {sum}</p>;
}

function Part({ part }) {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
}

function Content({ parts }) {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
}

function Course({ course }) {
  // console.log("course :>> ", course);
  const total = course.parts.reduce((sum, { exercises }) => sum + exercises, 0);

  return (
    <div>
      <Header header={course.name} />
      <Content parts={course.parts} />
      <Total sum={total} />
    </div>
  );
}

Total.propTypes = sumType;
Part.propTypes = partType;
Content.propTypes = partsType;
Course.propTypes = courseType;
Header.propTypes = headerType;

export default Course;

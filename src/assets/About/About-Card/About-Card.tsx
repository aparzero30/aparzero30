import { useRef, useEffect } from "react";
import "../About-Card.scss";

interface props {
  title: string;
  p1: string;
  p2: string;
  p3: string;
  mleft: string;
}

function AboutCard(props: props) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("hello");
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1, rootMargin: "-100px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      id="card-wrapper"
      ref={cardRef}
      className="about-card"
      style={{ marginLeft: props.mleft }}
    >
      <h2 id="bracket">{props.title}</h2>
      <h2 id="h2">{props.p1}</h2>
      <h2>{props.p2}</h2>
      <h2 id="bracket">{props.p3}</h2>
    </div>
  );
}

export default AboutCard;

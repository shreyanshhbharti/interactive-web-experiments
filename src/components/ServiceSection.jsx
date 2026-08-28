import React, { useEffect, useRef } from 'react';
import PixelIcon from './PixelIcon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/service-section.css';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceSection() {
  const serviceScrollRef = useRef(null);
  const servicePinRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const headerRef = useRef(null);

  // Shreyansh Bharti's real core focus areas and skills
  const aiMlItems = [
    'Machine Learning',
    'Artificial Intelligence',
    'Python',
    'Data & Models',
    'Intelligent Applications',
  ];

  const webItems = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Interactive UI',
  ];

  const buildItems = [
    'Full Stack Projects',
    'APIs',
    'Git & GitHub',
    'Deployment',
    'Creative Experiments',
  ];

  useEffect(() => {
    const serviceScroll = serviceScrollRef.current;
    const servicePin = servicePinRef.current;
    const card1 = card1Ref.current;
    const card2 = card2Ref.current;
    const card3 = card3Ref.current;
    const header = headerRef.current;

    if (!serviceScroll || !servicePin || !card1 || !card2 || !card3) return;

    const ctx = gsap.context(() => {
      // Pinned continuous scroll timeline - laying cards down into position
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: serviceScroll,
          start: 'top top',
          end: '+=200%',
          pin: servicePin,
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // Card 1: AI / ML (Left Column)
      // Initial: stacked slightly top-center with subtle physical angle
      // Continuous: fans left, shifts downward, and unfolds into clean left column
      tl.fromTo(
        card1,
        {
          xPercent: -15,
          yPercent: -20,
          z: 20,
          rotateZ: -6,
          rotateY: 6,
          rotateX: 4,
          scale: 0.98,
        },
        {
          xPercent: -110,
          yPercent: 0,
          z: 0,
          rotateZ: 0,
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          ease: 'power1.inOut',
        },
        0
      );

      // Card 2: WEB (Center Column)
      // Initial: stacked center
      // Continuous: shifts downward and settles into center column
      tl.fromTo(
        card2,
        {
          xPercent: 0,
          yPercent: -16,
          z: 0,
          rotateZ: 1,
          rotateY: -2,
          rotateX: 2,
          scale: 0.98,
        },
        {
          xPercent: 0,
          yPercent: 0,
          z: 0,
          rotateZ: 0,
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          ease: 'power1.inOut',
        },
        0
      );

      // Card 3: BUILD (Right Column)
      // Initial: stacked right-back
      // Continuous: fans right, shifts downward, and settles into clean right column
      tl.fromTo(
        card3,
        {
          xPercent: 15,
          yPercent: -12,
          z: -20,
          rotateZ: 7,
          rotateY: -8,
          rotateX: 3,
          scale: 0.98,
        },
        {
          xPercent: 110,
          yPercent: 0,
          z: 0,
          rotateZ: 0,
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          ease: 'power1.inOut',
        },
        0
      );
    }, serviceScroll);

    return () => ctx.revert();
  }, []);

  return (
    <section id="service" ref={serviceScrollRef} className="service-scroll">
      <div ref={servicePinRef} className="service-pin">
        <div className="service_container u-container">
          {/* Header Row: Label + Large Editorial Quote + Corner Symbols */}
          <div ref={headerRef} className="service_header">
            <div className="service_header-left">
              <span className="service_label">Service</span>
            </div>

            <div className="service_header-center">
              <p className="service_quote">
                Different is the biggest opportunity when everything looks the same.
              </p>
            </div>

            <div className="service_header-right" aria-hidden="true">
              <PixelIcon name="squares-diagonal" style={{ width: '14px', height: '14px' }} />
              <PixelIcon name="hourglass" style={{ width: '14px', height: '14px' }} />
              <PixelIcon name="octagon-circle" style={{ width: '14px', height: '14px' }} />
            </div>
          </div>

          {/* 3D Physical Cards Stage (Fanning and Unfolding Downward) */}
          <div className="service_cards-stage">
            <div className="service_cards-stage-inner">
              {/* Card 1: AI / ML */}
              <div ref={card1Ref} className="service-panel-wrapper service-panel--ai" data-cursor="AI / ML">
                <div className="service-panel_inner">
                  <div className="service-panel_face service-panel_front">
                    {/* Header */}
                    <div className="service-panel_top">
                      <span className="service-panel_title">AI / ML</span>
                      <PixelIcon name="squares-diagonal" style={{ width: '16px', height: '16px' }} />
                    </div>

                    {/* Pills List */}
                    <div className="service-panel_body">
                      <div className="service-panel_pill-list">
                        {aiMlItems.map((item, i) => (
                          <div key={i} className="service-panel_pill">
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer with inverted text */}
                    <div className="service-panel_bottom">
                      <PixelIcon name="squares-diagonal" style={{ width: '12px', height: '12px' }} />
                      <span className="service-panel_inverted">AI / ML</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: WEB */}
              <div ref={card2Ref} className="service-panel-wrapper service-panel--web" data-cursor="WEB">
                <div className="service-panel_inner">
                  <div className="service-panel_face service-panel_front">
                    <div className="service-panel_top">
                      <span className="service-panel_title">WEB</span>
                      <PixelIcon name="hourglass" style={{ width: '16px', height: '16px' }} />
                    </div>

                    <div className="service-panel_body">
                      <div className="service-panel_pill-list">
                        {webItems.map((item, i) => (
                          <div key={i} className="service-panel_pill">
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="service-panel_bottom">
                      <PixelIcon name="hourglass" style={{ width: '12px', height: '12px' }} />
                      <span className="service-panel_inverted">WEB</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: BUILD */}
              <div ref={card3Ref} className="service-panel-wrapper service-panel--build" data-cursor="BUILD">
                <div className="service-panel_inner">
                  <div className="service-panel_face service-panel_front">
                    <div className="service-panel_top">
                      <span className="service-panel_title">BUILD</span>
                      <PixelIcon name="octagon-circle" style={{ width: '16px', height: '16px' }} />
                    </div>

                    <div className="service-panel_body">
                      <div className="service-panel_pill-list">
                        {buildItems.map((item, i) => (
                          <div key={i} className="service-panel_pill">
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="service-panel_bottom">
                      <PixelIcon name="octagon-circle" style={{ width: '12px', height: '12px' }} />
                      <span className="service-panel_inverted">BUILD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom subtle divider icon */}
          <div className="service_footer-mark" aria-hidden="true">
            <PixelIcon name="cross" />
          </div>
        </div>
      </div>
    </section>
  );
}

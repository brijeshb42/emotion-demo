"use client";
import { breakpoints, css } from "@/lib/styled";
import { Card } from "./components/Card";
import { Container } from "@/landing-page/components/Container";
import { Typography } from "./components/Typography";

const userTestimonials = [
  {
    logo: "/static/images/avatar/1.jpg",
    name: "Remy Sharp",
    occupation: "Senior Engineer",
    testimonial:
      "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
  },
  {
    logo: "/static/images/avatar/2.jpg",
    name: "Travis Howard",
    occupation: "Lead Product Designer",
    testimonial:
      "One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product.",
  },
  {
    logo: "/static/images/avatar/3.jpg",
    name: "Cindy Baker",
    occupation: "CTO",
    testimonial:
      "The level of simplicity and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.",
  },
  {
    logo: "/static/images/avatar/4.jpg",
    name: "Julia Stewart",
    occupation: "Senior Engineer",
    testimonial:
      "I appreciate the attention to detail in the design of this product. The small touches make a big difference, and it's evident that the creators focused on delivering a premium experience.",
  },
  {
    logo: "/static/images/avatar/5.jpg",
    name: "John Smith",
    occupation: "Product Designer",
    testimonial:
      "I've tried other similar products, but this one stands out for its innovative features. It's clear that the makers put a lot of thought into creating a solution that truly addresses user needs.",
  },
  {
    logo: "/static/images/avatar/6.jpg",
    name: "Daniel Wolf",
    occupation: "CDO",
    testimonial:
      "The quality of this product exceeded my expectations. It's durable, well-designed, and built to last. Definitely worth the investment!",
  },
];

const whiteLogos = [
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg",
];

const darkLogos = [
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg",
];

export function Testimonials({ isDarkMode }: { isDarkMode?: boolean }) {
  return (
    <Container id="testimonials">
      <div
        css={{
          marginBottom: 3 * 8,
          [breakpoints.up("sm")]: {
            width: "100%",
            textAlign: "left",
            marginBottom: 2 * 8,
          },
          [breakpoints.up("md")]: {
            width: "60%",
            textAlign: "center",
          },
        }}
      >
        <Typography as="h2" variant="h4">
          Testimonials
        </Typography>
        <Typography variant="body1" color="secondary">
          See what our customers love about our products. Discover how we excel
          in efficiency, durability, and satisfaction. Join us for quality,
          innovation, and reliable support.
        </Typography>
      </div>
      <div
        css={{
          display: "grid",
          gap: 2 * 8,
          gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
          [breakpoints.up("sm")]: {
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          },
        }}
      >
        {userTestimonials.map((testimonial, index) => (
          <Card key={index} css={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="body2"
              color="secondary"
              css={{ marginBottom: 2 * 8 }}
            >
              {testimonial.testimonial}
            </Typography>
            <div css={{ display: "flex", gap: 2 * 8, marginTop: "auto" }}>
              <img
                src={testimonial.logo}
                alt={testimonial.name}
                height={40}
                width={40}
                css={{
                  borderRadius: 999,
                }}
              />
              <div>
                <Typography variant="body2" fontWeight="medium">
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="secondary">
                  {testimonial.occupation}
                </Typography>
              </div>
              <img
                width={64}
                alt={testimonial.occupation}
                css={{ opacity: 0.3, marginLeft: "auto" }}
                src={isDarkMode ? whiteLogos[index] : darkLogos[index]}
              />
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}

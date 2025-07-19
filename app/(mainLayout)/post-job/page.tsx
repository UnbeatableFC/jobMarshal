import { prisma } from "@/app/utils/db";
import { requireUser } from "@/app/utils/requireUser";
import { CreateJobForm } from "@/components/forms/CreateJobForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ArcjetLogo from "@/public/arcjet.jpg";
import InnjestLogo from "@/public/inngest-locale.png";
import Image from "next/image";
import { redirect } from "next/navigation";

const companies = [
  { id: 0, name: "Arcjet", logo: ArcjetLogo },
  { id: 1, name: "Inngest", logo: InnjestLogo },
  { id: 2, name: "Arcjet", logo: ArcjetLogo },
  { id: 3, name: "Inngest", logo: InnjestLogo },
  { id: 4, name: "Arcjet", logo: ArcjetLogo },
  { id: 5, name: "Inngest", logo: InnjestLogo },
];

const testimonials = [
  {
    quote:
      "Thanks to the platform, we found the perfect candidate who not only met but exceeded our expectations. Our hiring process has never been smoother.",
    author: "Sarah Johnson",
    company: "Tech Innovators Inc.",
  },
  {
    quote:
      "We were struggling to find talent that aligned with our company culture until we discovered this service. Now, our team is stronger and more motivated than ever.",
    author: "David Lee",
    company: "Green Solutions Ltd.",
  },
  {
    quote:
      "The ideal jobseeker came through a recommendation here. Their skills and attitude have transformed our project outcomes significantly.",
    author: "Maria Gonzalez",
    company: "Creative Minds Agency",
  },
  {
    quote:
      "Finding the right candidate used to be a challenge, but this ministry’s guidance and network connected us with exceptional talent quickly.",
    author: "James O’Connor",
    company: "NextGen Enterprises",
  },
];

const stats = [
  { id: 0, value: "10k+", label: "Monthly active job seekers" },
  { id: 1, value: "48h", label: "Average time to hire" },
  { id: 2, value: "95%", label: "Employer satisfaction rate" },
  { id: 3, value: "500+", label: "Companies hiring remotely" },
];

async function getCompany(userId: string) {
  const data = await prisma.company.findUnique({
    where: {
      userId: userId,
    },
    select: {
      name: true,
      location: true,
      about: true,
      logo: true,
      xAccount: true,
      website: true,
    },
  });

  if (!data) {
    return redirect("/");
  }

  return data;
}

const PostJobPage = async () => {
  const session = await requireUser();
  const data = await getCompany(session.id as string);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
      <>
        <CreateJobForm
          
          companyAbout={data.about}
          companyLocation={data.location}
          companyLogo={data.logo}
          companyName={data.name}
          companyWebsite={data.website}
          companyXAccount={data.xAccount}
        />
      </>

      <div className="col-span-1">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
              Trusted by Industry Leaders
            </CardTitle>
            <CardDescription>
              Join thousands of companies hiring top talent
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Company Logos */}
            <div className="grid grid-cols-3 gap-4">
              {companies.map((company) => (
                <div key={company.id}>
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={80}
                    height={80}
                    className="rounded-lg opacity-75 transition-opacity hover:opacity-100"
                  />
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <blockquote
                  key={index}
                  className="border-l-2 border-primary pl-4"
                >
                  <p className="text-sm text-muted-foreground italic">
                    &ldquo;{testimonial.quote}&ldquo;
                  </p>
                  <footer className="mt-2 text-sm font-medium">
                    - {testimonial.author}, {testimonial.company}
                  </footer>
                </blockquote>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ id, label, value }) => (
                <div key={id} className="rounded-lg bg-muted p-4">
                  <h4 className="text-2xl font-bold">{value}</h4>
                  <p className="text-sm text-muted-foreground">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PostJobPage;

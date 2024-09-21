import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { CardHoverEffect } from "./animation/CardHoverEffect";

export const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];

export const BrowserTab = () => {
    return (
        <main className="flex-1 overflow-y-auto mt-[56px]">
            <MaxWidthWrapper className="py-12">
                <hgroup className="flex flex-col items-start gap-2">
                    <h1 className="text-2xl font-semibold">Top Recommendations</h1>
                    <p className="font-medium text-sm text-muted-foreground ">
                        I want to share the best tools and libraries that I found invaluable in building full-stack applications.
                    </p>
                </hgroup>
                <Tabs defaultValue="frontend" className="py-8">
                    <TabsList className="grid grid-cols-2 gap-4">
                        <TabsTrigger value="frontend">Frontend</TabsTrigger>
                        <TabsTrigger value="backend">Backend</TabsTrigger>
                    </TabsList>
                    <TabsContent value="frontend" className="py-4">
                        <CardHoverEffect items={projects} />
                    </TabsContent>
                    <TabsContent value="backend" className="py-4">
                    <CardHoverEffect items={projects} />
                    </TabsContent>
                </Tabs>
            </MaxWidthWrapper>
        </main>
    )
}
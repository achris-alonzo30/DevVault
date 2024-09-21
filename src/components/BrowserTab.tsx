import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

export const BrowserTab = () => {
    return (
        <main className="flex-1 overflow-y-auto mt-[56px]">


            <MaxWidthWrapper className="py-12">
                <hgroup className="flex flex-col items-start gap-2">
                    <h1 className="text-2xl font-semibold">Recommendations</h1>
                    <p className="font-medium text-sm text-muted-foreground ">
                        These are the best tools and libraries that I found invaluable in building full-stack applications.
                    </p>
                </hgroup>
                <Tabs defaultValue="frontend" className="py-8">
                    <TabsList className="grid grid-cols-2 gap-4">
                        <TabsTrigger value="frontend">Frontend</TabsTrigger>
                        <TabsTrigger value="backend">Backend</TabsTrigger>
                    </TabsList>
                    <TabsContent value="frontend" className="py-4">
                        Frontend
                    </TabsContent>
                    <TabsContent value="backend">
                        Backend
                    </TabsContent>
                </Tabs>
            </MaxWidthWrapper>
        </main>
    )
}
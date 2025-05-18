"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MagicCard } from "./magicui/magic-card";
import { useTheme } from "./theme-provider";

type StyledTagProps = {
  children: React.ReactNode;
};
function StyledTag({children}:StyledTagProps){
    return (
    <p className="bg-neutral-500/50 rounded-2xl px-3 font-light opacity-70">
      {children}
    </p>
  );
}

type Props={
  Title:string,
  Description:string,
  Video:string,
}
export function VideoCard(props:Props) {
  const { theme } = useTheme();
  return (
    <Card className="p-0 max-w-sm w-full shadow-none border-none">
      <MagicCard
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        className="p-0"
      >
        <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
          <CardTitle>{props.Title}</CardTitle>
          <CardDescription className="h-15">
            {props.Description}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-4">
          <video className="w-[320px] h-[240px] object-cover mx-auto" controls>
            <source src={props.Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </CardContent>
      </MagicCard>
    </Card>
  );
}

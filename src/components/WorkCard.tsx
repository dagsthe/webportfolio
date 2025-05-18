"use client";

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
  Img:string,
  Footer:string[],
  SiteUrl?:string,
  SourceUrl?:string,
  CodepenUrl?:string,
}
export function WorkCard(props:Props) {
  const { theme } = useTheme();
  return (
    <Card className="p-0 max-w-sm w-full shadow-none border-none">
      <MagicCard
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        className="p-0"
      >
        <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
          <CardTitle>{props.Title}</CardTitle>
          <CardDescription className="h-20">
            {props.Description}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-4">
          <img className="w-[352px] h-[198px]" src={props.Img}></img>
        </CardContent>

        <CardFooter className="p-4 border-t border-border [.border-t]:pt-4 gap-x-2 gap-y-2 flex-wrap h-32 items-start content-start">
          {
            props.Footer.map((string:string) => (
              <StyledTag>{string}</StyledTag>
            ))
          }
          <div className="w-full flex justify-start mt-2 gap-2 absolute bottom-2">
            { props.SiteUrl &&
            <a target="_blank" href={props.SiteUrl} className="bg-slate-800 text-white px-4 rounded-sm hover:bg-slate-600 transition-all flex justify-evenly items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe size-3"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
              <p>Live Site</p>
            </a>
            }


            { props.SourceUrl &&
            <a target="_blank" href={props.SourceUrl} className="bg-slate-800 text-white px-4 rounded-sm hover:bg-slate-600 transition-all flex justify-evenly items-center gap-2">
              <svg viewBox="0 0 438.549 438.549" className="size-3"><path fill="currentColor" d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path></svg>
              <p>Source</p>
            </a>
            }

            { props.CodepenUrl &&
            <a target="_blank" href={props.CodepenUrl} className="bg-slate-800 text-white px-4 rounded-sm hover:bg-slate-600 transition-all flex justify-evenly items-center gap-2">
              <svg className="invert" fill="#000000" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 282.837 282.837" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M19.539,246.006c-1.412-1.413-2.995-2.159-4.576-2.159c-2.361,0-4.33,1.676-5.266,4.482l-9.24,27.723 c-0.701,2.103-0.591,3.95,0.309,5.201c0.736,1.021,1.959,1.584,3.443,1.584c0.79,0,1.655-0.155,2.571-0.461l27.722-9.241 c2.36-0.786,3.907-2.267,4.355-4.167c0.448-1.9-0.273-3.916-2.032-5.675L19.539,246.006z"></path> <path d="M280.205,48.279L234.553,2.627C232.86,0.934,230.599,0,228.189,0c-2.41,0-4.67,0.934-6.363,2.627L51.892,172.561 c-3.212,3.212-6.993,9.33-8.429,13.638l-7.417,22.252c-1.503,4.508,0.008,10.909,3.368,14.27l20.697,20.697 c2.403,2.403,6.48,3.957,10.388,3.957c0,0,0,0,0.001,0c1.404,0,2.71-0.198,3.881-0.589l22.253-7.417 c4.309-1.436,10.426-5.217,13.637-8.428L280.205,61.007C283.714,57.498,283.714,51.788,280.205,48.279z M252.535,70.896 L166.8,156.631c-2.929,2.929-6.768,4.393-10.607,4.393s-7.678-1.465-10.606-4.393c-5.858-5.857-5.858-15.355,0-21.213 l85.735-85.735c5.857-5.857,15.355-5.857,21.213,0C258.393,55.54,258.393,65.038,252.535,70.896z"></path> </g> </g></svg>
              <p>Codepen</p>
            </a>
            }
          </div>
          
        </CardFooter>
      </MagicCard>
    </Card>
  );
}

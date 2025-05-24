import { SidebarTrigger } from "../../ui/sidebar";
import ModeToggle from "./mode-toggle";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b">
      {/* Left Side */}
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <span className="text-lg font-semibold">Education Plattform</span>
        {/* <span className="text-lg font-semibold"> > Breadcrumb...</span> */}

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold bg-blue-500 text-white px-2 py-1 rounded">DEV v0.0.1</span>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;

// TODO: Breadcrumb open

// <SidebarProvider>
//   <AppSidebar />
//   <SidebarInset>
//     <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
//       <div className="flex items-center gap-2 px-4">
//         <SidebarTrigger className="-ml-1" />
//         <Separator orientation="vertical" className="mr-2 h-4" />
//         <Breadcrumb>
//           <BreadcrumbList>
//             <BreadcrumbItem className="hidden md:block">
//               <BreadcrumbLink href="#">
//                 Building Your Application
//               </BreadcrumbLink>
//             </BreadcrumbItem>
//             <BreadcrumbSeparator className="hidden md:block" />
//             <BreadcrumbItem>
//               <BreadcrumbPage>Data Fetching</BreadcrumbPage>
//             </BreadcrumbItem>
//           </BreadcrumbList>
//         </Breadcrumb>
//       </div>
//     </header>
//     <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
//       <div className="grid auto-rows-min gap-4 md:grid-cols-3">
//         <div className="aspect-video rounded-xl bg-muted/50" />
//         <div className="aspect-video rounded-xl bg-muted/50" />
//         <div className="aspect-video rounded-xl bg-muted/50" />
//       </div>
//       <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
//     </div>
//   </SidebarInset>
// </SidebarProvider>

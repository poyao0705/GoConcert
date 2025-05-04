import { SidebarLayout } from "@/components/sidebar-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full h-[calc(100vh-4rem)]">
      <div className="flex flex-1 w-full overflow-hidden">
        <SidebarLayout>
          <div className="overflow-y-auto p-10 mx-auto">
            {children}  
          </div>
        </SidebarLayout>
      </div>
    </div>
  );
}

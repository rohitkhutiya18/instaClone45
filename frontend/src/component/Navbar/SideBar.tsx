const SideBar = () => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 border-r bg-white p-6">
        
        <ul className="flex flex-col gap-6 text-lg">
          
          <li>Home</li> 
          <li>Search</li> 
          <li>Chat</li> 
          <li>Profile</li>
        </ul>
      </aside>
      
      {/* Mobile Bottom Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full h-16 border-t bg-white z-50">
        
        <ul className="h-full flex justify-around items-center">
          
          <li>Home</li> 
          <li>Search</li> 
          <li>Chat</li> 
          <li>Profile</li>
        </ul>
      </nav>
    </>
  );
};

export default SideBar;

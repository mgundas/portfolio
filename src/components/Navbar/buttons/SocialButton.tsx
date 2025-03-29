type ButtonProps = {
  href: string;
	children: React.ReactNode;
	icon: "fa-envelope" | "fa-linkedin" | "fa-github";
};

const SocialButton = ({href, icon, children}:ButtonProps) => {
	let iconClass: string = "icon mr-2 fa-brands " + icon;
	if (icon === "fa-envelope") {
		iconClass = "icon mr-2 fa-regular " + icon;
	}

  return (
    <a href={href} target="blank" className="sidebar-link">
      <i className={iconClass}></i>
			{children}
    </a>
  );
};

export default SocialButton;

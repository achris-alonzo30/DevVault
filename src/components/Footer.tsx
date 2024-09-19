import Link from "next/link";

export const Footer = () => {
	return (
		<footer className='py-6 md:px-8 md:py-0 border-t'>
			<nav className='flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
				<ul className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
					Built by{" "}
					<Link
						
						target='_blank'
                        rel='noreferrer noopener'
                        href='https://www.linkedin.com/in/lonzochris'
						className='font-medium underline underline-offset-4 dark:hover:text-neutral-100 hover:text-neutral-900'
					>
						Chris Alonzo
					</Link>
					. I ❤️ building community and helping fellow developers. Join me and contribute to{" "}
					<Link
						target='_blank'
						rel='noreferrer noopener'
                        href='https://github.com/achris-alonzo30/DevVault'
						className='font-medium underline underline-offset-4 dark:hover:text-neutral-100 hover:text-neutral-900'
					>
						GitHub
					</Link>
					.
				</ul>
			</nav>
		</footer>
	);
};
import {
	Inbox,
	MessageCircle,
	Send,
	Linkedin,
	FileText,
	ShoppingBag,
	BarChart2,
	GitHub,
	Codepen,
	NavLink,
	Facebook,
	Instagram,
	Twitter,
	Code
} from 'react-feather';
import React from 'react';
import {Tree} from './tree';

const MyExternalLinks = props => (
	<Tree open name="Links" {...props}>
		<Tree open name="Pet projects">
			<Tree name="UI1" href="https://ui1.io?ref=herman" icon={ShoppingBag} />
			<Tree
				color="green.4"
				name="Lean Analytics"
				href="https://leananalytics.io"
				icon={BarChart2}
			/>
		</Tree>
		<Tree open name="Programming">
			<Tree name="GitHub" href="https://github.com/hermanya" icon={GitHub} />
			<Tree name="Codepen" href="https://codepen.io/Hermanya" icon={Codepen} />
			<Tree
				name="Stack overflow"
				href="https://stackoverflow.com/users/7228427/herman-starikov"
				icon={NavLink}
			/>
		</Tree>
		<Tree open name="Contact">
			<Tree name="Email" href="mailto:hermanstarikov@gmail.com" icon={Inbox} />
			<Tree
				name="Messenger"
				href="https://m.me/hermanhasawish"
				icon={MessageCircle}
			/>
			<Tree name="Telegram" href="http://t.me/hermanya" icon={Send} />
			<Tree
				name="Twitter"
				href="https://twitter.com/hermanhasawish"
				icon={Twitter}
			/>
		</Tree>
		<Tree name="For hire">
			<Tree
				name="Linkedin"
				href="https://linkedin.com/in/hermanstarikov"
				icon={Linkedin}
			/>
			<Tree name="Resume" href="https://starikov.dev/resume" icon={FileText} />
		</Tree>
		<Tree name="Other">
			<Tree
				name="Instagram"
				href="https://instagram.com/hermanya"
				icon={Instagram}
			/>
			<Tree
				name="Facebook"
				href="https://facebook.com/hermanhasawish"
				icon={Facebook}
			/>
			<Tree
				name="Product Hunt"
				href="https://www.producthunt.com/@hermanhasawish/made"
				icon={NavLink}
			/>
			<Tree
				name="Dribbble"
				href="https://dribbble.com/hermanya"
				icon={NavLink}
			/>
			<Tree name="Angel" href="https://angel.co/hermanya" icon={NavLink} />
		</Tree>
		<Tree
			name="Source Code"
			href="https://github.com/Hermanya/hermanya.github.io/tree/develop"
			icon={Code}
			color="gray.5"
		/>
	</Tree>
);

export default MyExternalLinks;

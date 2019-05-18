import {
	ExternalLink,
	GitHub,
	Code,
	ArrowRight,
	ArrowLeft,
	User
} from 'react-feather';
import React from 'react';
import {Tree} from './tree';

const BlogLinks = ({discussions, next, previous, ...props}) => (
	<Tree open name="Links" {...props}>
		<Tree name="About author" href="/" icon={User} />
		<Tree open name="Discuss">
			{discussions
				.filter(_ => _)
				.map(link => {
					if (link.startsWith('https://github.com')) {
						return (
							<Tree
								key={link}
								href="https://github.com/hermanya"
								icon={GitHub}
								name="GitHub"
							/>
						);
					}

					return (
						<Tree key={link} name="Link" href={link} icon={ExternalLink} />
					);
				})}
		</Tree>
		<Tree open name="Other Posts">
			{next && <Tree name={next.title} href={next.link} icon={ArrowRight} />}
			{previous && (
				<Tree name={previous.title} href={previous.link} icon={ArrowLeft} />
			)}
		</Tree>
		<Tree
			name="Edit"
			href="https://github.com/Hermanya/hermanya.github.io/tree/develop"
			icon={Code}
			color="gray.5"
		/>
	</Tree>
);

export default BlogLinks;

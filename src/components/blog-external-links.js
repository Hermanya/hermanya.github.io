import {
	ExternalLink,
	GitHub,
	Edit,
	ArrowRight,
	ArrowLeft,
	User
} from 'react-feather';
import React from 'react';
import {Tree} from './tree';

const BlogLinks = ({discussions, next, previous, path, ...props}) => (
	<Tree open name="Links" {...props}>
		<Tree name="About author" href="/" icon={User} />
		<Tree open name="Comments">
			{discussions
				.filter(_ => _)
				.map(({text, url}) => {
					if (url.startsWith('https://github.com')) {
						return (
							<Tree
								key={url}
								href={url}
								icon={GitHub}
								name="GitHub"
							/>
						);
					}

					return (
						<Tree 
							key={url}
							name={
								<span style={{textTransform: 'capitalize'}}>
									{text}
								</span>
							} 
							href={url}
							icon={ExternalLink} />
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
			href={`https://github.com/Hermanya/hermanya.github.io/edit/develop/src${path}.md`}
			icon={Edit}
			color="gray.3"
		/>
	</Tree>
);

export default BlogLinks;

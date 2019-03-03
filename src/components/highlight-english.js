import React from 'react';
import {Text} from 'rebass';
import {css} from 'styled-components';

const hightlightEnglish = (text, misspelledWords = [], keyWords = []) => {
	const sentenses = text.match(/\(?[^.?!]+[.!?]\)?/g);
	return sentenses.map((sentense, sIndex) => {
		if (sentense.endsWith('!')) {
			return (
				<Text
					key={`${String(sIndex)}-!`}
					as="span"
					color="rgb(204, 61, 104)"
					mr={1}
				>
					{sentense}
				</Text>
			);
		}

		return [
			sentense
				.trim()
				.split(/\s/g)
				.map((word, index) => {
					if (/[A-Z]/.test(word[0]) && index !== 0) {
						return (
							<Text
								key={`${String(sIndex)}-${String(index)}`}
								as="span"
								color="#98cf2f"
								css={
									misspelledWords.includes(word) &&
									css`
										text-decoration-line: underline;
										text-decoration-style: wavy;
										text-decoration-color: red;
									`
								}
								mr={1}
							>
								{word}
							</Text>
						);
					}

					if (keyWords.some(key => word.startsWith(key))) {
						return (
							<Text
								key={`${String(sIndex)}-${String(index)}`}
								as="span"
								color="#82d2e7"
								mr={1}
							>
								{word}
							</Text>
						);
					}

					return (
						<Text key={`${String(sIndex)}-${String(index)}`} as="span" mr={1}>
							{word}
						</Text>
					);
				})
		];
	});
};

export default hightlightEnglish;

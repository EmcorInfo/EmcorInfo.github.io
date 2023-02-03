import styled from 'styled-components';

export const Box = styled.div`
background: #292c2f;
position: relative;
bottom: 0;
box-sizing: border-box;
min-width: 100%;
text-align: left;
font: bold 16px sans-serif;
max-width: 100%

padding: 31px 20px;
margin-top: 0;


@media (max-width: 100vw) {
	padding: 30px 70px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content:center;
	max-width: 100vw    ;
	margin: 0 auto;

    @media (max-width: 100%) {}
`
export const Container2 = styled.div`s
	justify-content: center;
    display: inline-box;
    overflow: visible;
	color: #ffffff;
    font-size: 18px;
	vertical-align: middle;
    align-items: center;
    @media (max-width: 100%){}
    `

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 10px;
margin-right: 10px;
align-items: center;
max-width: 300px;
/*background:green;*/

`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,
						minmax(220px, 1fr));

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fit,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: #4b4b4b;
	transition: 200ms ease-in;
}
`;
export const FooterLinkLeft = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 16px;
    text-decoration: none;
    font-weight:bold;

    &:hover {
        color: #4b4b4b;
        transition: 200ms ease-in;
    }
`;
export const FooterLinkCenter = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 16px;
    text-decoration: none;
    font-weight:bold;

    &:hover {
        color: #4b4b4b;
        transition: 200ms ease-in;
    }
`;
export const FooterICenter = styled.i`
    color: #fff;
    margin-bottom: 20px;
    font-size: 16px;
    text-decoration: none;
    font-weight:bold;

    &:hover {
        color: green;
        transition: 200ms ease-in;
    }
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 20px;
font-weight: bold;
`;

export const Company = styled.p`
color: #8f9296;

@media(font-size: 10px;)
`;

export const Img = styled.img`
self-a
`

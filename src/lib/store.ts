import { writable } from 'svelte/store';

export const count = writable(0);

//프로듀서
export const producers = [
	{
		no: '1',
		name: '별의 바다에 가라앉고 있어 / 별다소니',
		channel: 'https://www.youtube.com/channel/UCDn4683YUTBdzSVRRrpZLYQ',
		src: 'https://www.youtube.com/embed/l7ZAeTQhnZ0'
	},
	{
		no: '2',
		name: '엘디큐',
		channel: 'https://www.youtube.com/channel/UCICPFggViL6US-Tj0RcCY2w',
		src: 'https://www.youtube.com/embed/d8GCCfXB6pQ'
	},
	{
		no: '3',
		name: '유카아이/ukai',
		channel: 'https://www.youtube.com/channel/UCVV5S6RH_UrwFGgsA1HzI_w',
		src: 'https://www.youtube.com/embed/8SMdqfwcVko'
	},
	{
		no: '4',
		name: '무훈',
		channel: 'https://youtube.com/channel/UCcKty2obi4c75DFT7r4WgZw',
		src: 'https://www.youtube.com/embed/B8of8uFN13M'
	},
	{
		no: '5',
		name: '비 고양이(Ame Neko)',
		channel: 'https://www.youtube.com/channel/UCdxyHdWWi6HiUoEeYxdFrlg',
		src: 'https://www.youtube.com/embed/cLjOFjtVo3A'
	},
	{
		no: '6',
		name: '50mang쏘망',
		channel: 'https://www.youtube.com/channel/UCnjyL32Picn9AbLwLwlczmA',
		src: 'https://www.youtube.com/embed/n55fmdmOCxc'
	},
	{
		no: '7',
		name: 'スイッチP',
		channel: 'https://www.youtube.com/channel/UCiXfAPYDi9FtWwz1gXtGAOw',
		src: 'https://www.youtube.com/embed/xMkapCHSkts'
	},
	{
		no: '8',
		name: 'willow',
		channel: 'https://www.youtube.com/channel/UCnf5NK8Mfg9V1_Zr_lw8sWQ',
		src: 'https://www.youtube.com/embed/I1iWxWAd_gA'
	},
	{
		no: '9',
		name: 'Maro♬',
		channel: 'https://www.youtube.com/c/maronote',
		src: 'https://www.youtube.com/embed/sVbi2JzgtKQ'
	},
	{
		no: '10',
		name: 'Plum',
		channel: 'https://www.youtube.com/c/Plumwriter',
		src: 'https://www.youtube.com/embed/utjRONiBIOk'
	},
	{
		no: '11',
		name: 'Luae',
		channel: 'https://youtube.com/channel/UCd0CFcQgYqxO9NY6oT2xTnA',
		src: 'https://www.youtube.com/embed/DHS5UVXs-iQ'
	},
	{
		no: '12',
		name: 'attwn park (박화애)',
		channel: 'https://youtube.com/c/attwnpark',
		src: 'https://www.youtube.com/embed/NNXqhn76G68'
	},
	{
		no: '13',
		name: '5일',
		channel: 'https://www.youtube.com/channel/UCW_0Wt04KeAsydbmT8AyIlA',
		src: 'https://www.youtube.com/embed/vFAKOvKu2C4'
	},
	{
		no: '14',
		name: '상상정원',
		channel: 'https://www.youtube.com/channel/UCcMlU-Q2Z4pB1i7PBoJVp8w',
		src: 'https://www.youtube.com/embed/1-pk57BgfzI'
	},
	{
		no: '15',
		name: '시모킴 / SIMOKIMS',
		channel: 'https://www.youtube.com/c/시모킴SIMOKIMS',
		src: 'https://www.youtube.com/embed/YNmjXkdEMcU'
	},
	{
		no: '16',
		name: '노버트비버',
		channel: 'https://m.youtube.com/channel/UCExDA1xkdwR-6VICLR27oJg',
		src: 'https://www.youtube.com/embed/_B6X1NM-Cxg'
	},
	{
		no: '17',
		name: '리미',
		channel: 'https://www.youtube.com/channel/UCtC6Rovj9MSWAvv8mRLSH-Q',
		src: 'https://www.youtube.com/embed/PkjK-NwEyg8'
	},
	{
		no: '18',
		name: '팝스(DJPops)',
		channel: 'https://www.youtube.com/user/DJPops0611',
		src: 'https://www.youtube.com/embed/zXe7qC76mJ0'
	},
	{
		no: '19',
		name: 'WyvernP',
		channel: 'https://youtube.com/c/WyvernPOfficial',
		src: 'https://www.youtube.com/embed/90uQm3xXknc'
	},
	{
		no: '20',
		name: '한여름(一夏)',
		channel: 'https://youtube.com/channel/UCk9WugifY9UZ0i1ZBftQaJg',
		src: 'https://www.youtube.com/embed/K2qvX-gqCKU'
	},
	{
		no: '21',
		name: '행복한피자빵',
		channel: 'https://www.youtube.com/channel/UCPBoIGLbCk93Nltf6LBlhIQ',
		src: 'https://www.youtube.com/embed/MfqI7BQL73w'
	},
	{
		no: '22',
		name: 'ENnE',
		channel: 'https://www.youtube.com/channel/UCNcGjybPAi0iUpHoShVeIfA',
		src: 'https://www.youtube.com/embed/uPTu14NDjbA'
	},
	{
		no: '23',
		name: 'GG HANAH',
		channel: 'https://www.youtube.com/channel/UChdI4_IyLsBTUKfesQttc0Q',
		src: 'https://www.youtube.com/embed/2jlpJDIwiE0'
	},
	{
		no: '24',
		name: '이뮤',
		channel: 'https://www.youtube.com/channel/UCRu8NwYpMXR8ihRab8IIK0w',
		src: ''
	},
	{
		no: '25',
		name: '난초',
		channel: 'https://www.youtube.com/channel/UCX_u-3LiUF9j5y5bH_FatDQ/featured',
		src: 'https://www.youtube.com/embed/s0qIHcbLHsk'
	},
	{
		no: '26',
		name: '하양 복숭아',
		channel: 'https://www.youtube.com/HakuRui',
		src: 'https://www.youtube.com/embed/HrcniuYQTtU'
	},
	{
		no: '27',
		name: '초코파슬리',
		channel: 'https://www.youtube.com/channel/UCfySgkpl07q3U1aASRztNag',
		src: 'https://www.youtube.com/embed/fUfQ6EB10gI'
	},
	{
		no: '28',
		name: 'Endou',
		channel: 'https://www.youtube.com/channel/UC3jPPY_mpJtu7wQhYwN1KSg',
		src: 'https://www.youtube.com/embed/EygbcjYEem0'
	},
	{
		no: '29',
		name: '시나브로',
		channel: 'https://www.youtube.com/channel/UCJDpA6NWaHnCP7gRjnHpt3Q',
		src: 'https://www.youtube.com/embed/cp-r55GRtkI'
	},
	{
		no: '30',
		name: '런치스쿼드',
		channel: 'https://www.youtube.com/channel/UCFapQljGTX8CEHU_u38lZww',
		src: 'https://www.youtube.com/embed/QZNdaSXSE-4'
	},
	{
		no: '31',
		name: '하이량',
		channel: 'https://youtube.com/c/HiRyang',
		src: 'https://www.youtube.com/embed/0okwYKtNVRE'
	},
	{
		no: '32',
		name: '마노 (Mano)',
		channel: 'https://www.youtube.com/chorockmano',
		src: 'https://www.youtube.com/embed/amWxUlRmidA'
	},
	{
		no: '33',
		name: '空白P',
		channel: 'https://youtube.com/channel/UC3eHf0r1Dy88cXjDjP5t7GA',
		src: 'https://www.youtube.com/embed/mgFskpK9Xys'
	},
	{
		no: '34',
		name: '하니모스',
		channel: 'https://www.youtube.com/channel/UCGFfi25cf_SlIOWxpfupr1Q',
		src: 'https://www.youtube.com/embed/_yg-rostlCQ'
	},
	{
		no: '35',
		name: '장금씨',
		channel: 'https://www.youtube.com/c/%EC%9E%A5%EA%B8%88%EC%94%A8',
		src: 'https://www.youtube.com/embed/a_1lqwcgsmE'
	},
	{
		no: '36',
		name: 'Gyuwon',
		channel: 'https://www.youtube.com/channel/UCo469jh3z6jKrGMgA9Izjyg',
		src: ''
	},
	{
		no: '37',
		name: 'Z:U',
		channel: 'https://www.youtube.com/channel/UCKGe9eT_ECRn5_B3Q8tkAiw',
		src: 'https://www.youtube.com/embed/i_A6GSnBOMQ'
	},
	{
		no: '38',
		name: '선우',
		channel: 'https://www.youtube.com/channel/UC02IGODFB1zMwI-iAIp1cfw',
		src: 'https://www.youtube.com/embed/as7Ofq-Pch4'
	},
	{
		no: '39',
		name: '에이앤',
		channel: 'https://www.youtube.com/channel/UCQIWPXx-FNHy0jc4nJHBXUw',
		src: 'https://www.youtube.com/embed/IY3cL-q-4qg'
	},
	{
		no: '40',
		name: 'NahrDijla',
		channel: 'https://www.youtube.com/channel/UCjCEIqf1v5igZaCuxU5PqBA',
		src: 'https://www.youtube.com/embed/8M0ZpPbVAAM'
	},
	{
		no: '41',
		name: 'Renyu',
		channel: 'https://www.youtube.com/c/Renyu/featured',
		src: 'https://www.youtube.com/embed/CABAZf0zdTc'
	},
	{
		no: '42',
		name: '도도시',
		channel: 'https://www.youtube.com/channel/UCNbIWAtindd8DEiUO-9wDFA',
		src: 'https://www.youtube.com/embed/AS0HytTJvng'
	},
	{
		no: '43',
		name: '혼울봄',
		channel: 'https://www.youtube.com/c/혼울봄',
		src: 'https://www.youtube.com/embed/9fRMTI1RwSY'
	},
	{
		no: '44',
		name: 'OZ',
		channel: 'https://www.youtube.com/channel/UCu-c8tjacA_fASlKfvBG6Hw',
		src: 'https://www.youtube.com/embed/uWLPtAULtAc'
	},
	{
		no: '45',
		name: '묘우네',
		channel: 'https://www.youtube.com/channel/UC37OMD5CKU_S8eYuag6KitA',
		src: 'https://www.youtube.com/embed/MMZLt4gGgYk'
	},
	{
		no: '46',
		name: 'GYUTAENG',
		channel: 'https://www.youtube.com/channel/UCE5GbdbDbn_5bZtlcQoRbAw',
		src: 'https://www.youtube.com/embed/wAaQy2ImcV0'
	},
	{
		no: '47',
		name: '백반P',
		channel: 'https://www.youtube.com/channel/UCuknhbU0VVkqWWyNSKbSnIg',
		src: ''
	},
	{
		no: '48',
		name: 'HIT',
		channel: 'https://www.youtube.com/channel/UCJJza3B8Q2z15eTGSsqocPg',
		src: 'https://www.youtube.com/embed/Wlk1IafuGRg'
	},
	{
		no: '49',
		name: 'FRIYAY',
		channel: 'https://www.youtube.com/channel/UCiiAAtWrcACQymFVZlpM32A',
		src: 'https://www.youtube.com/embed/XXvDW_Vbi7o'
	},
	{
		no: '50',
		name: '사자춤',
		channel: 'https://www.youtube.com/channel/UCBRerofQ_RYe4LkdT1Qeq2Q',
		src: 'https://www.youtube.com/embed/_l4FIbeNuHE'
	},
	{
		no: '51',
		name: 'Rosé_216',
		channel: 'https://www.youtube.com/channel/UCIfRkS7-NDErzMuOEhG2XGQ',
		src: 'https://www.youtube.com/embed/fUSG6Oqx2Mc'
	},
	{
		no: '52',
		name: '134340',
		channel: 'https://www.youtube.com/channel/UC8JVf9rTSC-NhzS8I2ftY1w',
		src: 'https://www.youtube.com/embed/dk--rPbCEE8'
	},
	{
		no: '53',
		name: 'Tenucca',
		channel: 'https://www.youtube.com/channel/UCR9RmjH5Hnnh7EnMw93XabQ',
		src: 'https://www.youtube.com/embed/WkApXujpuc0'
	},
	{
		no: '54',
		name: 'koze_1070',
		channel: 'https://www.youtube.com/channel/UCEvmzjKIFBrsmE8HiAxd-VA',
		src: 'https://www.youtube.com/embed/ED7XG8BgSTA'
	},
	{
		no: '55',
		name: '유성악단',
		channel: 'https://www.youtube.com/channel/UCSyjNPdCint3mtHwTOW202w',
		src: 'https://www.youtube.com/embed/MnPygzlQ1Hk'
	}
];

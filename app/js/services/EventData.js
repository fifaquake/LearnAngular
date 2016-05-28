eventsApp.factory('eventData', function () {
    return {
        event: {
			name: 'Angular Boot Camp',
			date: 1359781015626,
			time: '10:30 am',
			location: {
				address: 'Google Headquarters',
				city: 'ShangHai',
				privince: 'ShangHai'
			},
			imageUrl: '/img/angularjs-logo.png',
			sessions: [
				{
					name: 'Directives MasterClass',
					creatorName: 'Bob Smith',
					duration: 1,
					level: 'Advanced',
					abstract: 'In this session you will learn the ins and outs of directive',
					upVoteCount: 0
				},
				{
					name: 'Scopes for fun and profit',
					creatorName: 'John doe',
					duration: 2,
					level: 'Introductory',
					abstract: 'This session will take a closer look at scopes',
					upVoteCount: 0
				},
				{
					name: 'Well Behaved Controller',
					creatorName: 'Jane Doe',
					duration: 4,
					level: 'Inter',
					abstract: 'Controllers are the begining of everything',
					upVoteCount: 0
				}
			]
		}
    } ;
});
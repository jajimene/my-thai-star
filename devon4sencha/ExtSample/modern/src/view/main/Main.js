Ext.define('Sample.view.main.Main', {
    extend: 'Ext.NavigationView',
    requires: [
        'Sample.view.main.MainVM',
        'Sample.view.main.MainVC'
    ],
	viewModel : 'main-view',
	controller : 'main-view',

    alias: 'widget.main-view',
	defaultBackButtonText: '<',
	padding: '0',
	navigationBar : {
		items: [
			{
				ui:'plain',
				xtype:'button',
				iconCls: 'fa-bars',
				iconAlign: 'left',
				scale: 'small',
				handler: 'showMainMenu',
				Cdocked: 'right'
			}
		]
	},
	items : [{ 
		title:i18n.main.header.title,
		header: false,
		xtype:'panel',
		layout: {
			type: 'hbox',
			pack:'center',
			align: 'center'
		},
		items : [
			{
		bind : {
			html: 'modern hello {user.name}'
		}

			}

		]
	}],


	initialize: function(){
		var menu = Ext.widget('main-menu');
		console.log(menu,'----');
		Ext.Viewport.setMenu(menu, {
			side: 'left',
			// omitting the reveal config defaults the animation to 'cover'
			// reveal: true
		});

		this.callParent(arguments);
	}
});


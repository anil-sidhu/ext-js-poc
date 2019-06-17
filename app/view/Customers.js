Ext.define('StudentApp.view.Customers', {
    extend: 'Ext.grid.Panel',
    id: 'customersGrid',
    config: {},
    width: '100%',
    height: 400,
    selType: 'checkboxmodel',
    title: 'Customer Info',
    store: "Customers",
    selModel:
    {
        mode: 'MULTI'
    },
    viewConfig:
    {
        stripeRows: true
    },
    columns: [{
        text: "Id",
        dataIndex: 'id',
        hidden: false,
        width: 35
    },
    {
        text: "First Name",
        flex: 1,
        dataIndex: 'name',
        editor:
        {
            // defaults to textfield if no xtype is supplied
            allowBlank: false
        }
    },
    {
        text: "Birth Date",
        flex: 1,
        dataIndex: 'email',
        editor:
        {
            xtype: 'datefield',
            format: 'd-m-Y',
            allowBlank: true
        }
    },
    {
        text: "City",
        flex: 1,
        dataIndex: 'phone',
        editor:
        {
            allowBlank: true
        }
    },
    {
        text: "State",
        flex: 1,
        dataIndex: 'address',
        editor:
        {
            allowBlank: true
        }
    }],

});

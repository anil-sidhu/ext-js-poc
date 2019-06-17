Ext.define('StudentApp.store.Customers',
    {
        extend: 'Ext.data.Store',
        model: 'StudentApp.model.Customers',
        proxy:
        {
            type: 'ajax',
            url: 'http://localhost:4000/api/customers',
            reader:
            {
                rootProperty: 'customers',
                type: 'json'
            }

        },
        autoLoad: true,
        storeId: 'Customers'
    });

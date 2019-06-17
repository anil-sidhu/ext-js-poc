Ext.define('StudentApp.store.Customers',
    {
        extend: 'Ext.data.Store',
        model: 'StudentApp.model.Customers',
        proxy:
        {
            type: 'ajax',
            url: 'https://jsonplaceholder.typicode.com/users/1',
            reader:
            {
                rootProperty: '',
                type: 'json'
            }

        },
        autoLoad: true,
        storeId: 'Customers'
    });
export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    //  NEW: ADD THIS BLOCK HERE
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Necklaces', value: 'necklaces' },
          { title: 'Rings', value: 'rings' },
          { title: 'Bracelets', value: 'bracelets' },
          { title: 'Earrings', value: 'earrings' },
          { title: 'Watches', value: 'watches' },
          { title: 'Sets', value: 'sets' }
        ]
      }
    },
    // END NEW BLOCK
    {
      name: 'tag',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean'
    }
  ],
}
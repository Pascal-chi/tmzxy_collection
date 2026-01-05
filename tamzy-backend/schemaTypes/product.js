export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
    },
    {
      name: 'tag',
      title: 'Tagline',
      type: 'string',
      description: 'e.g., 18k Italian Gold'
    },
    {
      name: 'price',
      title: 'Price (Naira)',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'featured',
      title: 'Featured Product?',
      type: 'boolean',
      initialValue: false
    }
  ],
}
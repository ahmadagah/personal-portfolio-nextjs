'use client';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  name: z.string().nonempty().min(3, {
    message:
      'Name is required and must be at least 3 characters long',
  }),
  email: z.string().email({
    message:
      'Email is required and must be a valid email address',
  }),
  location: z.string().nonempty({
    message: 'Location is required',
  }),
  message: z
    .string()
    .nonempty({ message: 'Message is required' }),
});

export default function ContactPage() {
  // defining the form
  const form = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      location: '',
      message: '',
    },
  });

  // defining the form submission handler
  async function onSubmit(
    values: z.infer<typeof formSchema>
  ) {
    try {
      const response = await fetch(
        '/api/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        const result = await response.json();
        alert(
          'Message sent successfully! Your ID: ' +
            result.id
        );
        form.reset(); // Reset the form after successful submission
      } else {
        const error = await response.json();
        alert('Error: ' + error.error);
      }
    } catch (error) {
      console.error(
        'Error submitting form:',
        error
      );
      alert('An unexpected error occurred.');
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-6'
      >
        <h2 className='text-2xl font-semibold text-gray-800 text-center'>
          Contact Us
        </h2>
        <p className='text-gray-600 text-sm text-center'>
          Fill out the form below and we’ll get
          back to you shortly.
        </p>

        {/* Name Field */}
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  className='border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                  placeholder='Your Name'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Location Field */}
        <FormField
          control={form.control}
          name='location'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input
                  className='border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                  placeholder='Your Location'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email Field */}
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className='border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                  placeholder='Your Email'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message Field */}
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <textarea
                  className='border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-lg p-2 w-full'
                  placeholder='Your Message'
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <div className='text-center'>
          <Button
            type='submit'
            className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition'
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );

  // return <h1>Hello Next.js!</h1>;
}

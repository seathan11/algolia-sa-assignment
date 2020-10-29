*Question 1*: Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:

Records
Indexing
I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."

Cheers, George

Reply:
Hello George,

I hope you are doing well.  

A records index stores the data that you would like to make searchable with Algolia.  You can push data into the records index via a JSON API or manually through your Algolia Dashboard UI.  You can then select the attributes of your data that you want to make searchable. We have an online guide with additional details regarding index searchable attributes.

https://www.algolia.com/doc/guides/managing-results/must-do/searchable-attributes/?utm_medium=page_link&utm_source=dashboard#searchable-attributes-overview

The main goal of search is to help users find what they are looking for. Search breaks down into two crucial steps: returning accurate results and ranking these results.  You can find an in depth description of ranking search results here.

https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/?utm_medium=page_link&utm_source=dashboard#custom-ranking

Let me know if you would like to schedule time to discuss.

Thanks,
John Lacey

--

*Question 2*: Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards, Matt


Reply:
Hello Matt,

I am sorry to hear you are unhappy with the new dashboard design but feedback of any kind is always useful.  While Algolia doesn’t provide a direct method to delete multiple indices at once you can however write your own script using our API clients to loop through and delete the indices you want. This information can be found here.

https://www.algolia.com/doc/guides/sending-and-managing-data/manage-your-indices/how-to/delete-multiple-indices/

Let me know if you would like to schedule time to discuss.

Thanks,
John Lacey

--

*Question 3*: Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards, Leo

Reply:
Hello Leo,
 
I hope you are doing well.  It is great to hear that you are looking to integrate Algolia into your website.  Our tools, libraries, clients, and integrations let you create efficient search implementations in no time. We intentionally made them non-restrictive: we designed Algolia to be flexible, customizable, and, whenever possible, open-source.  The first step is to send your data to Algolia, in a proper format. Once on Algolia’s servers, you can start testing our search functionality with your data. You can do this without code, using the dashboard, or with code, using one of our API clients. To help you build the best solution as quickly and frictionlessly as possible, we provide a family of UI/UX libraries called InstantSearch. InstantSearch offers a full set of UI components that you can use on any web, mobile, or voice application. In minutes, you get a fully-functional search UI. You can use the InstantSearch widgets out-of-the-box, or fully customize them to match your needs.
 
Let me know if you would like to schedule time to discuss.

Thanks,
John Lacey

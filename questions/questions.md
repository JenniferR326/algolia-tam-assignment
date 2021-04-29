_Question 1_

From: marissa@startup.com  
Subject: Bad design

Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Thanks,  
Marissa

Hi Marissa,

Thanks for bringing this to my attention. I'm sorry to hear you are unhappy with the new dashboard design. The dashboard is designed to ensure the integrity of customer data by preventing accidental deletions.

To clear or delete an index, select the index from the indices menu, then click the 'Manage index' dropdown and select either the 'Clear' or 'Delete' option. You will be prompted to confirm before action is taken.

Alternatively, you can delete indexes via API following this documentation: https://www.algolia.com/doc/api-reference/api-methods/delete-index/

Feel free to reach out if you run into any further issues.

Jennifer

_Question 2_:

From: carrie@coffee.com  
Subject: URGENT ISSUE WITH PRODUCTION!!!!

Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".

Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?

Please advise on how to fix this. Thanks.

Hi Carrie,

Thanks for bringing this to my attention. I'm sorry to hear you are having an issue with your website. Algolia limits the size of individual records for performance reasons. The "Record is too big" error appears when you try to index records that excede your plan's limit. One way to decrease record size is to limit the amount of metadata stored with each record. I would advise removing any metadata that is not used for searching.

Per our size limit requirements at https://www.algolia.com/doc/faq/basics/is-there-a-size-limit-for-my-index-records/ , you should aim to maintain a maximum record size of 10 KB. Please let me know if you need any further assistance.

Jennifer

_Question 3_:

From: marc@hotmail.com  
Subject: Error on website

Hi, my website is not working and here's the error:

![error message](./error.png)

Can you fix it please?

Hi Marc,

Thank you for bringing this to my attention. Searchkit is a library that is not maintained by the Algolia team, though it is sometimes used alongside Algolia. You could reach out to the Searchkit team for assistance via their website: https://www.searchkit.co/ .

You may have to install Searchkit with your project package manager so that it can be required correctly.

Jennifer

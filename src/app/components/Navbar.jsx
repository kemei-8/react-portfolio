import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <section>
            <div className="flex justify-between align-middle relative transparent-bg m-[1%]">
                
                <div>
                    <img className="" 
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/32278958-06cb-4aff-b9de-c063e634dd2c/dfal7im-93548fe2-d303-4535-a8b4-bd17bc77a36a.png/v1/fill/w_894,h_894/paldean_wooper_pixelart_by_axoknight_dfal7im-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzMyMjc4OTU4LTA2Y2ItNGFmZi1iOWRlLWMwNjNlNjM0ZGQyY1wvZGZhbDdpbS05MzU0OGZlMi1kMzAzLTQ1MzUtYThiNC1iZDE3YmM3N2EzNmEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HwnQo92DSgE5Bk4ne7B8luHufDtG5fYTJc4S-vT_08A" 
                        alt="Wooper Logo Image" 
                        style={{width: '40px'}} />
                </div>
                
                <ul class="flex relative mr-8 list-none">
                    <li id="linked" class="mr-8">
                        <Link href="my-project/.next/server/app/about-page.js">About</Link>
                    </li>

                    <li id="linked" class="mr-8">
                        <a class="" href="mailto: kemei@u.northwestern.edu">Contact</a>
                    </li>
                </ul>

            </div>
        </section>
    );
}

export default Navbar;
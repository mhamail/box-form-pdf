import React from 'react'
import Box from '../Box/Box'
import Header from '../header/Header'

const Form = () => {
  const Mention = ({ component, mention }: { component: any, mention: string }) => (
    <div className='flex'>
      <div className='flex space-x-1 '>
        {component}
      </div>
      <span className='text-[7px] ms-[1px]'>{mention}</span>
    </div>
  )
  const MentionContainer = ({ text, item, space, wf }: { wf?: boolean, text: string, item: string[], space?: boolean }) => (
    <ContentOutline>
      <Title>{text}</Title>
      <Boxes wf={wf}>
        <p>:</p>
        <div className={`w-full`}>
          <div className={`flex ${space ? "space-x-6" : "justify-between"} `}>
            {item.map((item: any, i: any) => (
              <Mention key={i}
                component={<Box b={1} />}
                mention={item}
              />
            ))}
          </div>
        </div>
      </Boxes>
    </ContentOutline>
  )

  const FullLineBox = ({ text, italic }: { text: string, italic?: boolean, }) => (
    <ContentOutline>
      <Title><span className={`${italic && "italic"}`}>{text}</span></Title>
      <Boxes wf>
        <p>:</p>
        <Box b={22} />
      </Boxes>
    </ContentOutline>
  )

  const DashBoxes = ({ title, item, wf }: { wf?: boolean, title: string, item: number[] }) => (
    <ContentOutline>
      <Title>{title}</Title>
      <Boxes wf={wf}>
        <p>:</p>
        {item.map((quantity, i) => (
          <>
            <Box b={quantity} key={i} />
            {i !== item.length - 1 && <p>-</p>}
          </>
        ))}
      </Boxes>
    </ContentOutline>
  )
  const MentionDashBoxes = ({ title, item }: { title: string, item: number[] }) => (
    <ContentOutline>
      <Title>{title}</Title>
      <Boxes wf>
        <Mention
          component={
            <>
              <p>:</p>
              {item.map((quantity, i) => (
                <>
                  <Box b={quantity} key={i} />
                  {i !== item.length - 1 && <p>-</p>}
                </>
              ))
              }
            </>
          }
          mention='(DD-MM-YYYY)'
        />
      </Boxes>
    </ContentOutline>
  )
  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  // depends styles
  const Title = ({ children }: { children: React.ReactNode }) => (
    <div className="w-4/12">
      <p>
        {children}
      </p>
    </div>
  )
  const Heading = ({ children }: { children: React.ReactNode }) => (
    <h4 className=' font-bold uppercase text-xs'>{children}</h4>
  )
  const Boxes = ({ children, wf }: { children: React.ReactNode, wf?: boolean }) => (
    //  320+128 = 328 
    <div>
      <div className={`w-[272px]`}>
        <div className={`${wf ? "" : "w-[170px] mr-32"} `}>
          <div className='flex space-x-1 items-center'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
  const ContentOutline = ({ children }: { children: React.ReactNode }) => (
    <div className='flex justify-between text-[10px] leading-[10px]' >
      {children}
    </div>
  )
  const Layout = ({ children }: { children: React.ReactNode }) => (
    <div className='w-[595px] space-y-2'>
      <div className=' mx-auto mt-10'>
        <Header />
      </div>
      <div className=' bg-gray-900 h-[2px] w-11/12 mx-auto'></div>
      <div className='w-[90%] mx-auto'>
        {children}
      </div>
    </div>
  )
  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  return (
    <Layout>
      <div className='w-full flex space-x-4 relative'>
        <div className='w-full space-y-1 leading-[1.1px]'>
          {/*  */}
          <DashBoxes title='Date' item={[2, 2, 4]} />
          {/* */}
          <ContentOutline>
            <Title>Application Number</Title>
            <Boxes>
              <p>:</p>
              <Box b={14} />
            </Boxes>
          </ContentOutline>
          {/* */}
          <ContentOutline>
            <Title>Authorization Number</Title>
            <Boxes>
              <p>:</p>
              <Box b={14} />
            </Boxes>
          </ContentOutline>
          {/* *********** */}
          <Heading>1. GENERAL</Heading>
          <ContentOutline>
            <Title>Authorization Number</Title>
            <Boxes>
              <p>:</p>
              <Mention
                component={<Box b={3} />}
                mention='(Days)'
              />
              <div className='pr-2'></div>
              <Mention
                component={<Box b={2} />}
                mention='(Months)'
              />
            </Boxes>
          </ContentOutline>
          <MentionContainer
            text="Type of Visa"
            item={["Diplomatic", "Service/Official", "Visit"]}
          />
          {/*  */}
          <MentionContainer
            text='Category of Visit'
            item={["Single", "Multiple", "Limited Stay"]}
          />
          {/*  */}
          <MentionContainer
            wf
            text='Type of Visa'
            item={["Posting", "Working", "Business", "Family", "Tourist"]}
          />

          <FullLineBox text='Point of Departure' />
          {/*  */}
          <FullLineBox text='Point of Entry in Indonesia' />
          {/*  */}
          <FullLineBox text="Flight/Carrier Name and Number" />

          {/*  */}
          <MentionDashBoxes
            item={[2, 3, 4]}
            title='Date of Entry'
          />
          {/*  */}
          <MentionDashBoxes
            item={[2, 3, 4]}
            title='Date of Departure'
          />
          {/*  */}
          <ContentOutline>
            <Title>Destination Address in Indonesia</Title>
            <Boxes wf>
              <p>:</p>
              <div className='space-y-1'>
                <Box b={22} />
                <Box b={22} />
              </div>
            </Boxes>
          </ContentOutline>
          {/*  */}
          <FullLineBox text='City' />
          <FullLineBox text='Province' />
          <ContentOutline>
            <Title>Phone/Mobile Number</Title>
            <Boxes wf>
              <p>:</p>
              <Box b={3} />
              <p>-</p>
              <Box b={3} />
              <p>-</p>
              <Box b={9} />
            </Boxes>
          </ContentOutline>
          <FullLineBox text='Previous Country Visited' />
          {/* ****Personal Data** */}
          <Heading>II. PERSONAL DATA</Heading>
          <FullLineBox text='First Name' />
          <FullLineBox text='Middle Name' />
          <FullLineBox text='Family/Surename' />
          <MentionContainer
            text='Sex'
            item={["Male", "Female"]}
            space
          />
          {/*  */}
          <MentionContainer
            text='Sex'
            item={["Married", "Single"]}
            space
          />
          {/*  */}
          <FullLineBox text='Place of Birth' />
          {/*  */}
          <MentionDashBoxes
            item={[2, 3, 4]}
            title='Date of Birth'
          />
          {/*  */}
          <ContentOutline>
            <Title>Nationality <br /> Address </Title>
            <Boxes wf>
              <p>:</p>
              <div className='space-y-1'>
                <Box b={22} />
                <Box b={22} />
                <Box b={22} />
              </div>
            </Boxes>
          </ContentOutline>
          {/*  */}
          <FullLineBox text='City' />
          {/*  */}
          <FullLineBox text='Province' />
          {/*  */}
          <FullLineBox text='State/Country' />
          {/*  */}
          <DashBoxes wf
            item={[3, 3, 9]}
            title='Mobile Number'
          />
          {/*  */}
          <div className='border p-1 border-gray-500'>
            <FullLineBox text="Father's name" italic />
            <FullLineBox text='Occupation' italic />
            <FullLineBox text="Mother's name" italic />
            <FullLineBox text='Occupation' italic />
          </div>
          {/*  */}
          <FullLineBox text='Occupation' />
          <FullLineBox text='Current Position/Desination' />
          <FullLineBox text='Name of Institution/Company' />
          {/*  */}
          <ContentOutline>
            <Title>Address </Title>
            <Boxes wf>
              <p>:</p>
              <div className='space-y-1'>
                <Box b={22} />
              </div>
            </Boxes>
          </ContentOutline>
          {/*  */}
          <FullLineBox text='City' />
          <FullLineBox text='Province' />
          <FullLineBox text='State/Country' />
          {/*  */}
          <DashBoxes wf item={[3, 3, 9]} title='Phone Number' />
          {/* **********Passport  Information*************** */}
          <Heading>IV. Passport Information</Heading>
          <MentionContainer
            wf
            text="Type of Visa"
            item={["", "Diplomatic Service", "UNLP", "Ordinary"]}
          />
          <FullLineBox text='Passport Number' />
          <FullLineBox text='Date of Issue' />
          <MentionDashBoxes item={[2, 3, 4]} title='Date of Issue' />
          <MentionDashBoxes item={[2, 3, 4]} title='Date of Expiry' />

          {/* **********Sponsorship Information*************** */}
          <Heading>V. Sponsorship Information</Heading>
          <>
            <MentionContainer
              wf
              text="Sponsorship in Indonesia"
              item={["Individual", "Government", "Company", "Other"]}
            />
            <MentionContainer
              wf
              text=""
              item={["Institutions", "International Organization", "NGO"]}
            />
          </>
          <FullLineBox text='Number of Individual' />
          <FullLineBox text='Current Position' />
          <FullLineBox text={`Number of Institution/Company/Hotel/International Organization/NGO`} />
          <ContentOutline>
            <Title>Nationality <br /> Address </Title>
            <Boxes wf>
              <p>:</p>
              <div className='space-y-1'>
                <Box b={22} />
                <Box b={22} />
              </div>
            </Boxes>
          </ContentOutline>
          <FullLineBox text='City' />
          <FullLineBox text='Country' />
          <DashBoxes wf title='Mobile/Phone Number' item={[3, 3, 9]} />
          {/* ********************Miscellaneous*************************************8 */}
          <MentionContainer text='Have you ever been to Indonesia before ?'
            item={["yes", "No"]}
          />
          <MentionDashBoxes
            title='If "Yes" date of visit '
            item={[2, 2, 4]}
          />
          <FullLineBox text='Purpose of Visit' />
          <MentionContainer
            text='Are you in possesion of any countries travel documents'
            item={["yes", "No"]}
          />
          <MentionContainer
            text='Do you have previous visa to enter Indonesia ? '
            item={["yes", "No"]}
          />
          <MentionContainer
            text='Have your visa application been denied before? '
            item={["yes", "No"]}
          />
          <MentionContainer
            text='Have you been forced to leave Indonesia?'
            item={["yes", "No"]}
          />
          <MentionContainer
            text='Have you ever been committed a crime or any Offence?'
            item={["yes", "No"]}
          />
          <MentionContainer
            text='Do you have health problem condition ?'
            item={["yes", "No"]}
          />
          <FullLineBox text='If "Yes" give detail ' />
          <MentionContainer
            text='Do you have fully vaccinated Covid-19/Booster? '
            item={["yes", "No"]}
          />
          <MentionContainer
            text='Have you been previously posted abroad?'
            item={["yes", "No"]}
          />
          {/*  */}
          <ContentOutline>
            <Title> If &quot;Yes&quot; give detail 2 previous posting </Title>
            <Boxes wf>
              : &nbsp;
              <div className=''>

                <div className='flex space-y-0 p-0 m-0 '>
                  1 &nbsp; <Box b={20} />
                </div>
                <div className='flex'>
                  2 &nbsp;<Box b={20} />
                </div>
              </div>
            </Boxes>
          </ContentOutline>
          {/*  */}
          <FullLineBox text='Return ticket of the Airline Company' />
          <FullLineBox text='place of Issue' />
          <MentionDashBoxes
            title='Date of Issue'
            item={[2, 2, 4]}
          />
          <MentionDashBoxes
            title='Date of Expiry'
            item={[2, 2, 4]}
          />
          {/* ******End lines************ */}
          <div className='pt-3 space-y-3'>
            <p className='font-semibold text-[10px] leading-[12px] mb-3'>
              I, hereby declare that the statements given above are true and I understand that even if granted a visa,
              <br />
              prerequites checked administration at the airport remains the discreation of the Immigration authorities in Indonesia
            </p>

            Applicant`s signature and name
            <div className='flex space-x-4'>
              <div className='w-1 h-1 border border-gray-500 px-36 py-16'></div>
              <div className='flex mt-10 items-start'>
                <div className='flex space-x-1 items-center '>
                  <Box b={2} />
                  <p>-</p>

                  <Box b={2} />
                  <p>-</p>
                  <Box b={4} />
                </div>
                <span className=' text-[10px] leading-[12px] ms-[1px]'>(DD-MM-YYYY)</span>
              </div>
            </div>
            <p className='font-semibold text-[10px] leading-[12px]'>
              &quot;Passport must be valid not least than 6 (six) months before departure&quot;</p>
          </div>
        </div>


        {/* +++++++++++++++++++++++++++++pic+++++++++++++++++++++++++++++++++++++++= */}
        <div className='w-[92px] h-auto absolute right-0'>
          <div className='p-4 h-28 border border-gray-800'></div>
        </div>

      </div>
    </Layout>
  )
}

export default Form
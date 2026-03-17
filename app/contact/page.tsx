import PageLayout from "@/components/PageLayout";

export default function Page() {
  return (
    <PageLayout title="Contact Us">
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '40px'
      }}>
        <div style={{ 
          backgroundColor: 'rgba(4, 15, 45, 0.9)', 
          padding: '60px', 
          borderRadius: '20px',
          textAlign: 'center',
          maxWidth: '800px',
          width: '100%'
        }}>
          <h1 style={{ 
            color: '#ffffff', 
            fontSize: '48px', 
            fontWeight: 'bold',
            marginBottom: '20px',
            fontFamily: 'Arial, Helvetica, sans-serif'
          }}>
            Contact Us
          </h1>
          <p style={{ 
            color: '#9d9d9d', 
            fontSize: '18px',
            lineHeight: '1.8',
            fontFamily: 'Arial, Helvetica, sans-serif'
          }}>
            Get in touch with us for any inquiries or support. We are here to help you with all your cloud hosting needs.
          </p>
          <p style={{ 
            color: '#9d9d9d', 
            fontSize: '16px',
            marginTop: '20px',
            fontFamily: 'Arial, Helvetica, sans-serif'
          }}>
            Email: support@kmcq.com<br />
            Phone: +639171229475<br />
            Address: 569 A. Apostol St. Brgy. Tungkop, Minglanilla, Central Visayas, Cebu 6046
          </p>
        </div>
      </div>
    </PageLayout>
  );
}

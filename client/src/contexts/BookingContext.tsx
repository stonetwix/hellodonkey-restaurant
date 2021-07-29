import { Component, createContext } from 'react';
import { ContactInfo } from '../components/BookATable/ContactInformation';
import { DateTimeInfo } from '../components/BookATable/DateTime';

interface State {
    dateTimeInfo?: DateTimeInfo;
    contactInfo?: ContactInfo;
}

interface ContextValue extends State {   
    updateDateTimeInfo: (dateTimeInfo: DateTimeInfo) => void;
    updateContactInfo: (contactInfo: ContactInfo) => void;
}

export const BookingContext = createContext<ContextValue>({
    dateTimeInfo: undefined,
    updateDateTimeInfo: () => {},
    updateContactInfo: () => {},
});

class BookingProvider extends Component<{}, State> {
    state: State = {
        dateTimeInfo: undefined,
        contactInfo: undefined,
    }

    // componentDidMount() {
    //     this.setState({
    //         dateTimeInfo: JSON.parse(localStorage.getItem('bookingInfo') as string) || [],
    //     });
    // }

    updateDateTimeInfo = (dateTimeInfo: DateTimeInfo) => {
        this.setState({ dateTimeInfo: dateTimeInfo });
        console.log('context, date: ', this.state.dateTimeInfo)
    }

    updateContactInfo = (contactInfo: ContactInfo) => {
        this.setState({ contactInfo: contactInfo });
        console.log('context, contact: ', this.state.contactInfo)
    }
    
    render() {
        return (
            <BookingContext.Provider value={{
                dateTimeInfo: this.state.dateTimeInfo,
                contactInfo: this.state.contactInfo,
                updateDateTimeInfo: this.updateDateTimeInfo,
                updateContactInfo: this.updateContactInfo,
            }}>
                {this.props.children}
            </BookingContext.Provider>
        )
    }
}

export default BookingProvider;
import { Component, createContext } from 'react';
import { DateTimeInfo } from '../components/BookATable/DateTime';

interface State {
    dateTimeInfo?: DateTimeInfo;
}

interface ContextValue extends State {   
    updateDateTimeInfo: (dateTimeInfo: DateTimeInfo) => void;
}

export const BookingContext = createContext<ContextValue>({
    dateTimeInfo: undefined,
    updateDateTimeInfo: () => {},
});

class BookingProvider extends Component<{}, State> {
    state: State = {
        dateTimeInfo: undefined,
    }

    // componentDidMount() {
    //     this.setState({
    //         dateTimeInfo: JSON.parse(localStorage.getItem('bookingInfo') as string) || [],
    //     });
    // }

    updateDateTimeInfo = (dateTimeInfo: DateTimeInfo) => {
        this.setState({ dateTimeInfo: dateTimeInfo });
        console.log('context: ', this.state.dateTimeInfo)
    }

    render() {
        return (
            <BookingContext.Provider value={{
                dateTimeInfo: this.state.dateTimeInfo,
                updateDateTimeInfo: this.updateDateTimeInfo,
            }}>
                {this.props.children}
            </BookingContext.Provider>
        )
    }
}

export default BookingProvider;